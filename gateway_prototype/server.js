
/**
 * SISTEMA: GATEWAY DE COBRO PARALELO (PROTOTIPO FUNCIONAL)
 * LENGUAJE: Node.js
 */

const express = require('express');
// Mock axios for testing without real API calls
const axios = {
    post: async () => ({ data: "Respuesta simulada de la IA" })
};
const db = require('./db_connection');

const app = express();
app.use(express.json());

const PRECIOS = {
    'chat_gpt_4': 0.05,
    'image_gen': 0.10
};

// --- MIDDLEWARE DE SEGURIDAD Y COBRO (EL GUARDIÁN) ---
async function guardianDeCobro(req, res, next) {
    const apiKeyCliente = req.headers['x-api-key'];
    const servicioSolicitado = req.body.servicio;

    console.log(`[Gatekeeper] Petición recibida. Key: ${apiKeyCliente}, Servicio: ${servicioSolicitado}`);

    if (!apiKeyCliente) {
        return res.status(401).json({ error: "ACCESO DENEGADO: Falta API Key." });
    }

    try {
        // 1. BUSCAR CLIENTE
        const cliente = await db.query('SELECT * FROM clientes_api WHERE api_key_publica = ?', [apiKeyCliente]);

        if (!cliente) {
            console.log("[Gatekeeper] Cliente no encontrado.");
            return res.status(403).json({ error: "ACCESO DENEGADO: Cliente no existe." });
        }

        if (cliente.estado === 'SUSPENDIDO') {
            console.log("[Gatekeeper] Cliente suspendido.");
            return res.status(402).json({ error: "SERVICIO BLOQUEADO: Cuenta suspendida." });
        }

        // 2. VERIFICAR FONDOS
        const costo = PRECIOS[servicioSolicitado];
        if (!costo) return res.status(400).json({ error: "Servicio no válido." });

        if (cliente.saldo_actual < costo) {
            console.log(`[Gatekeeper] Saldo insuficiente. Tiene ${cliente.saldo_actual}, necesita ${costo}.`);
            return res.status(402).json({
                error: "SALDO INSUFICIENTE. Recargue para continuar.",
                saldo_actual: cliente.saldo_actual,
                costo_necesario: costo
            });
        }

        // 3. PASAR
        req.cliente = cliente;
        req.costo = costo;
        next();

    } catch (error) {
        console.error("Error en el Guardián:", error);
        res.status(500).json({ error: "Error interno de servidor." });
    }
}

// --- ENDPOINT PRINCIPAL ---
app.post('/api/ejecutar-servicio', guardianDeCobro, async (req, res) => {
    const { servicio } = req.body;

    try {
        // 1. LLAMADA REAL (Simulada)
        const respuestaIA = await axios.post();

        // 2. COBRO
        await db.transaction(async (trx) => {
            await trx('clientes_api')
                .where('id', req.cliente.id)
                .decrement('saldo_actual', req.costo);

            await trx('historial_consumo').insert({
                cliente_id: req.cliente.id,
                servicio_usado: servicio,
                costo_operacion: req.costo
            });
        });

        console.log(`[Success] Servicio ejecutado. Nuevo saldo: ${req.cliente.saldo_actual}`);

        res.json({
            status: "success",
            data: respuestaIA.data,
            meta: {
                saldo_nuevo: req.cliente.saldo_actual
            }
        });

    } catch (error) {
        res.status(502).json({ error: "Error en el proveedor de IA." });
    }
});

// START
const PORT = 3001; // Using 3001 to avoid conflicts
const server = app.listen(PORT, () => {
    console.log(`TEST SERVER running on port ${PORT}`);
});

// Export for testing if needed
module.exports = server;
