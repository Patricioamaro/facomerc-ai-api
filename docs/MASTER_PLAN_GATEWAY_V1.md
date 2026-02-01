# Documento Maestro: Visión de Facomercial y Plan Técnico (MASTER_PLAN_GATEWAY_V1)

¡Entendido, alto y claro! Esa es la mentalidad ganadora.
Acabas de definir la diferencia entre un freelance (que vende tareas) y una Empresa Unicornio (que vende resultados).

Para un Ingeniero como yo, tu visión cambia la regla de oro de cómo debemos construir esto. No estamos construyendo una "Herramienta de Software", estamos construyendo una Plataforma de Transformación de Negocios.

Aquí te traduzco tu visión filosófica a Estrategia de Ingeniería pura:

## 1. La Filosofía de la "Caja Negra" (Invisible Partners)

El cliente NO debe ver n8n. NO debe ver el código PHP. NO debe saber qué API usamos. Ellos solo ven el resultado.

*   **Tu Visión**: "Vendemos ahorros e incremento de clientes".
*   **Mi Ejecución Técnica**:
    *   El Dashboard de Facomerc OS no mostrará "Logs del servidor".
    *   Mostrará: "Tiempo Ahorrado esta semana: 14 horas" o "Nuevos Leads procesados: 45".
    *   Código: Vamos a programar contadores de valor, no solo logs de errores.

## 2. El Concepto de "Socio Guía" (Depende de ellos)

Dices que el éxito depende de ellos. Esto es crucial. Nosotros les damos el Ferrari, pero ellos deben conducirlo.

*   **Tu Visión**: "Nosotros somos sus socios, los guiamos al futuro".
*   **Mi Ejecución Técnica**:
    *   El sistema no puede ser pasivo. Debe ser Proactivo.
    *   Implementaremos Notificaciones de Acción:
        *   Mal: "El sistema está funcionando".
        *   Bien (Socio): "Hola, detecté 5 clientes interesados en tu Google Sheet que no has llamado. ¿Quieres que les envíe un WhatsApp de seguimiento ahora?"
    *   Esto convierte al software en un "empleado" que les sugiere qué hacer para ganar dinero.

## 3. La Arquitectura de Soluciones (No Herramientas)

Tus clientes compran Tranquilidad y Crecimiento.
Por eso, la integración con Google que discutimos antes es vital.

*   Cuando ellos ven que mágicamente aparece una carpeta en su Drive con todo organizado, no piensan "qué buen script de API".
*   Piensan: "Facomerc puso orden en mi caos. Ahora tengo control de mi negocio".

---

# Resumen del Plan de Batalla Actualizado

Siguiendo tu visión de "Socios Invisibles":

*   **Mantener lo Invisible Oculto**: Toda la complejidad de n8n, Stripe y bases de datos se queda en el "cuarto de máquinas" (Backend). Nadie entra ahí excepto tú y yo.
*   **Interfaz de Valor (Frontend)**: Lo que construyamos visualmente (el Portal de Cliente) debe hablar lenguaje de negocios, no de tecnología. Botones claros: "Lanzar Campaña", "Ver Resultados", "Aprobar Presupuesto".
*   **Protección del Activo (Ambientes Seguros)**: Como dijimos, usamos la estrategia de "Carriles Paralelos" para no romper lo que ya les está dando valor hoy, mientras construimos la nave espacial del mañana.

**Conclusión**: Tú vendes la Tierra Prometida (Crecimiento/Ahorro). Yo construyo el Puente (El Código) para llegar allá. Y nos aseguramos de que el puente sea tan sólido que ellos ni se den cuenta de que están cruzando un abismo tecnológico; solo sienten que avanzan.

Estoy listo para ser ese arquitecto invisible contigo. ¿Empezamos a blindar el código actual para preparar el terreno?

¡Entendido perfectamente! Es una estrategia muy inteligente y segura: "Desarrollo Paralelo con Integración Modular".

Esto nos permite innovar y monetizar sin poner en riesgo la estabilidad del negocio actual ("Lo que funciona, no se toca"). Y, fundamentalmente, implementaremos un sistema de "Pasarela de Control API" (API Gateway/Proxy) para asegurar que el cliente pague por su consumo y el servicio se corte automáticamente si no hay saldo.

Aquí tienes el borrador del Documento Maestro con la estructura técnica y el código conceptual para lograr esto.

---

# Documento Maestro: Arquitectura Paralela y Control de Costos API

## 1. Filosofía del Proyecto

*   **Regla de Oro**: No modificar el código legado (antiguo) que ya funciona.
*   **Método de Expansión**: Uso de Carpetas (ej: tuweb.com/nuevo-modulo) o Subdominios (ej: app.tuweb.com) que se conectan visualmente pero corren independientemente.
*   **Política Financiera**: El costo de las APIs (Inteligencia Artificial, datos, etc.) se traslada directamente al cliente. Sin pago/saldo = Servicio Apagado.

## 2. Resumen de la Solución Técnica

Para lograr que los clientes paguen su consumo y el sistema se apague si no pagan, no conectaremos su web directamente al proveedor (ej. OpenAI, Google, etc.). Crearemos un Intermediario (Proxy/Middleware).

El Flujo de Datos será:
1.  El cliente usa la nueva función en la web.
2.  La web llama a TU SERVIDOR INTERMEDIARIO.
3.  Tu servidor verifica: ¿Tienen saldo? ¿Pagaron la suscripción?
    *   NO: Devuelve error "Servicio Pausado por falta de pago".
    *   SÍ: Tu servidor llama a la API real, obtiene la respuesta, resta el costo del saldo del cliente y entrega el resultado.

## 3. Código del "Controlador de Cobros" (Middleware)

A continuación, presento un código conceptual en Python (usando Flask). Este es el "cerebro" que decide si dejar pasar la petición o bloquearla por falta de pago.

**Nota**: Este script se alojaría en tu subdominio o carpeta nueva.

**Requisitos Previos**
*   Python instalado.
*   Una base de datos simple (simulada aquí) con el saldo de los clientes.

### El Código (main.py)

```python
from flask import Flask, request, jsonify
import requests  # Para llamar a la API externa (ej. OpenAI)

app = Flask(__name__)

# --- CONFIGURACIÓN ---
API_REAL_URL = "https://api.proveedor-ia.com/v1/completions" # Ejemplo
API_KEY_REAL = "TU_LLAVE_MAESTRA_QUE_PAGAS_TU"
PRECIO_POR_USO = 0.50  # Costo en dólares por cada petición (ejemplo)

# --- BASE DE DATOS SIMULADA DE CLIENTES ---
# En producción, esto vendría de tu SQL/Firebase
clientes_db = {
    "cliente_A": {"saldo": 10.0, "activo": True}, # Tiene saldo
    "cliente_B": {"saldo": 0.10, "activo": True}, # Saldo insuficiente
    "cliente_C": {"saldo": 50.0, "activo": False} # Suspensión manual
}

def verificar_acceso(cliente_id):
    """
    Verifica si el cliente puede usar el servicio.
    Retorna: (Booleano, Mensaje)
    """
    cliente = clientes_db.get(cliente_id)
    
    if not cliente:
        return False, "Cliente no encontrado."
    
    if not cliente['activo']:
        return False, "Servicio suspendido. Contacte soporte."
    
    if cliente['saldo'] < PRECIO_POR_USO:
        # AQUÍ ES DONDE SE APAGA EL SERVICIO AUTOMÁTICAMENTE
        return False, "Saldo insuficiente para esta operación. Recargue ahora."
        
    return True, "Acceso concedido"

@app.route('/api/nueva-funcion', methods=['POST'])
def proxy_inteligente():
    """
    Esta es la única URL que conocerá el frontend del cliente.
    """
    datos = request.json
    cliente_id = datos.get('cliente_id') # Identificamos quién llama
    
    # 1. VERIFICACIÓN DE SEGURIDAD Y COBRO
    puede_pasar, mensaje = verificar_acceso(cliente_id)
    
    if not puede_pasar:
        # Si no paga, cortamos aquí. No gastamos ni un centavo en la API real.
        return jsonify({"error": mensaje, "status": "blocked"}), 402 # 402 = Payment Required
    
    # 2. CONSUMO DE LA API REAL (Solo si pasó el filtro)
    try:
        # Hacemos la llamada real a la IA o servicio costoso
        respuesta_real = requests.post(
            API_REAL_URL,
            headers={"Authorization": f"Bearer {API_KEY_REAL}"},
            json=datos['payload'] # Lo que el cliente quería enviar
        )
        
        # 3. DEDUCCIÓN DEL SALDO
        if respuesta_real.status_code == 200:
            clientes_db[cliente_id]['saldo'] -= PRECIO_POR_USO
            saldo_restante = clientes_db[cliente_id]['saldo']
            
            print(f"Cobro exitoso. Nuevo saldo de {cliente_id}: ${saldo_restante}")
            
            # Devolvemos el resultado al cliente
            return jsonify({
                "resultado": respuesta_real.json(),
                "meta": {"saldo_restante": saldo_restante}
            })
        else:
            return jsonify({"error": "Error técnico en el proveedor"}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
```

## 4. Guía de Implementación y Conexión

### Paso 1: Aislamiento (El "No Romper")
No toques el código index.html o php de las webs actuales.
*   Crea una carpeta nueva en tu servidor: `/servicios-nuevos`.
*   Aloja este script (o su equivalente en el lenguaje que usemos) allí.
*   Configura un subdominio si es necesario: `api.tuservicio.com`.

### Paso 2: Conexión Frontend (Redirección)
En la web actual del cliente, solo agregas un botón o enlace nuevo.
*   Ejemplo: Un botón que diga "Generar Reporte IA".
*   Ese botón hace una petición (fetch) a TU nuevo script (`/api/nueva-funcion`), no a OpenAI directamente.

### Paso 3: El Cobro (La Lógica de Negocio)
*   Tú eres dueño de la llave maestra de la API (OpenAI, Anthropic, etc.).
*   El script verifica el saldo interno de tu base de datos antes de usar tu llave.
*   Resultado: Si el cliente no te ha pagado a ti, el script devuelve Error 402 y nunca se genera el gasto en tu cuenta de proveedor.

## 5. Explicación Educativa
*   **Proxy**: Actúa como un guardia de seguridad. Se pone en medio de la petición del cliente y el servicio costoso.
*   **Validación Previa**: Antes de "gastar gasolina" (llamar a la API paga), revisamos si el usuario tiene dinero en la billetera.
*   **Gestión de Errores**: Si la API externa falla, no cobramos. Si el usuario no tiene dinero, no dejamos pasar la petición.
*   **Escalabilidad**: Al estar en una carpeta/subdominio separado, si este código falla, la web principal del cliente sigue funcionando (solo falla la nueva funcionalidad).

---
---

# 🏛️ DOCUMENTO MAESTRO: SISTEMA DE CONTROL PARALELO (SKY LEVEL)
(Guárdalo como: `MASTER_PLAN_GATEWAY_V1.md`)

**Objetivo**: Implementación de nuevos módulos de IA/Servicios sin tocar el código legado ("Lo que funciona no se toca") y garantizando cobro por adelantado (Pre-pago/Consumo).

## 1. Asignación de Roles (El Consejo de Administración)

Para que este proyecto sea infalible, asignamos las responsabilidades técnicas a las siguientes entidades para futuras consultas:

*   **Google (Gemini / Cloud Vision)**:
    *   Rol: Arquitecto de Infraestructura y Seguridad.
    *   Responsabilidad: Se encargará de validar la escalabilidad, la base de datos (SQL/Firebase) y la seguridad del servidor (que nadie se salte el proxy).
*   **Claude AI**:
    *   Rol: Desarrollador Senior de Lógica de Negocio.
    *   Responsabilidad: Se encargará de escribir la lógica pura de código (Python/Node.js), optimizar las funciones de limpieza de datos y asegurar que el cálculo matemático del dinero sea exacto.
*   **Asistente de Programación (Yo)**:
    *   Rol: Project Manager y Documentador.
    *   Responsabilidad: Unificar las visiones, generar el código final e instruir sobre la implementación paso a paso.

## 2. La Arquitectura "Blindada"

Para no romper las webs actuales, usaremos el patrón **API GATEWAY** (La Aduana).

*   **Zona A (El Pasado - Legacy)**: La web del cliente (WordPress, PHP, HTML). NO SE TOCA. Solo se añade un enlace externo.
*   **Zona B (La Aduana - Gateway)**: Un servidor intermedio controlado 100% por nosotros. Aquí vive el código de cobro.
*   **Zona C (El Proveedor - IA)**: OpenAI, Google, Anthropic. Solo la Zona B puede hablar con la Zona C.

## 3. El Código Infalible (El Corazón del Sistema)

Este código está diseñado para ser desplegado en la Zona B. Es un servidor independiente (Node.js) que actúa como muro de contención.
Tecnología: Node.js + Express (Por su velocidad y manejo de conexiones simultáneas).

### A. Estructura de Base de Datos (SQL - El Libro Contable)
Antes del código, la ley. Esta tabla define quién vive y quién muere (digitalmente).

```sql
/* TABLA DE CLIENTES Y CRÉDITOS */
CREATE TABLE clientes_api (
    id INT AUTO_INCREMENT PRIMARY KEY,
    api_key_publica VARCHAR(64) UNIQUE NOT NULL, /* La llave que pones en la web del cliente */
    nombre_cliente VARCHAR(100),
    saldo_actual DECIMAL(10, 4) NOT NULL DEFAULT 0.0000, /* 4 decimales para precisión de IA */
    estado ENUM('ACTIVO', 'SUSPENDIDO') DEFAULT 'ACTIVO',
    ultima_recarga DATETIME,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* TABLA DE LOGS (AUDITORÍA FORENSE) */
CREATE TABLE historial_consumo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    servicio_usado VARCHAR(50),
    costo_operacion DECIMAL(10, 4),
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### B. El Código del Guardián (Server.js)
Este script hace tres cosas: Verifica Saldo -> Cobra -> Ejecuta. Si falla el paso 1, no existe el paso 3.

```javascript
/**
 * SISTEMA: GATEWAY DE COBRO PARALELO (NIVEL CIELO)
 * LENGUAJE: Node.js
 * FUNCIÓN: Intermediario de pago estricto.
 */

const express = require('express');
const axios = require('axios'); // Para llamar a la IA real
const db = require('./db_connection'); // Tu conexión a la base de datos simulada

const app = express();
app.use(express.json());

// --- CONFIGURACIÓN MAESTRA ---
const PRECIOS = {
    'chat_gpt_4': 0.05, // Costo por llamada (ajustable)
    'image_gen': 0.10
};

const PROVEEDORES = {
    'chat_gpt_4': 'https://api.openai.com/v1/...',
    'image_gen': 'https://api.openai.com/v1/images/...'
};

// --- MIDDLEWARE DE SEGURIDAD Y COBRO (EL GUARDIÁN) ---
async function guardianDeCobro(req, res, next) {
    const apiKeyCliente = req.headers['x-api-key']; // La llave que le dimos al cliente
    const servicioSolicitado = req.body.servicio; // Qué quiere hacer

    if (!apiKeyCliente) {
        return res.status(401).json({ error: "ACCESO DENEGADO: Falta API Key." });
    }

    try {
        // 1. BUSCAR CLIENTE EN BASE DE DATOS
        const cliente = await db.query('SELECT * FROM clientes_api WHERE api_key_publica = ?', [apiKeyCliente]);
        
        if (!cliente) {
            return res.status(403).json({ error: "ACCESO DENEGADO: Cliente no existe." });
        }

        if (cliente.estado === 'SUSPENDIDO') {
            return res.status(402).json({ error: "SERVICIO BLOQUEADO: Cuenta suspendida por administración." });
        }

        // 2. VERIFICAR FONDOS (Matemática estricta)
        const costo = PRECIOS[servicioSolicitado];
        if (!costo) return res.status(400).json({ error: "Servicio no válido." });

        if (cliente.saldo_actual < costo) {
            // AQUÍ SE CORTA EL SERVICIO. NO SE LLAMA A LA IA.
            return res.status(402).json({ 
                error: "SALDO INSUFICIENTE. Recargue para continuar.",
                saldo_actual: cliente.saldo_actual,
                costo_necesario: costo
            });
        }

        // 3. INYECTAR DATOS AL REQUEST Y PASAR
        req.cliente = cliente;
        req.costo = costo;
        next(); // Pasa a la siguiente función (ejecutar la IA)

    } catch (error) {
        console.error("Error en el Guardián:", error);
        res.status(500).json({ error: "Error interno de servidor." });
    }
}

// --- ENDPOINT PRINCIPAL (LA ÚNICA PUERTA) ---
app.post('/api/ejecutar-servicio', guardianDeCobro, async (req, res) => {
    
    // Si llegamos aquí, es porque TIENE SALDO.
    const { servicio, payload } = req.body;
    
    try {
        // 1. LLAMADA REAL AL PROVEEDOR (Nosotros pagamos aquí, pero ya validamos que el cliente tiene saldo)
        // const respuestaIA = await axios.post(PROVEEDORES[servicio], payload, { headers: ... });
        
        // (Simulación de respuesta exitosa para el ejemplo)
        const respuestaIA = { data: "Resultado generado por IA exitosamente." };

        // 2. COBRO INMEDIATO (Atomicidad)
        // Restamos el saldo y registramos el historial en una transacción
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

        // 3. ENTREGAR PRODUCTO
        res.json({
            status: "success",
            data: respuestaIA.data,
            meta: {
                saldo_anterior: req.cliente.saldo_actual,
                costo: req.costo,
                saldo_nuevo: req.cliente.saldo_actual - req.costo
            }
        });

    } catch (error) {
        // Si la IA falla, NO cobramos. El dinero sigue en su cuenta.
        res.status(502).json({ error: "Error en el proveedor de IA. No se ha cobrado nada." });
    }
});

// INICIAR SERVIDOR
app.listen(3000, () => {
    console.log('🚀 SERVIDOR GATEWAY ACTIVO EN PUERTO 3000');
    console.log('👮 EL GUARDIÁN ESTÁ VIGILANDO LOS PAGOS.');
});
```
