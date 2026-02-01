
// db_connection_mock.js
// Simulating a database for testing purposes
const clientes_api = [
    { id: 1, api_key_publica: 'key_cliente_rico', nombre_cliente: 'Cliente Rico', saldo_actual: 100.00, estado: 'ACTIVO' },
    { id: 2, api_key_publica: 'key_cliente_pobre', nombre_cliente: 'Cliente Pobre', saldo_actual: 0.01, estado: 'ACTIVO' },
    { id: 3, api_key_publica: 'key_cliente_malo', nombre_cliente: 'Cliente Malo', saldo_actual: 50.00, estado: 'SUSPENDIDO' }
];

const historial_consumo = [];

module.exports = {
    query: async (sql, params) => {
        // Mocking SELECT * FROM clientes_api WHERE api_key_publica = ?
        if (sql.includes('SELECT * FROM clientes_api')) {
            const key = params[0];
            return clientes_api.find(c => c.api_key_publica === key) || null; // Return object or null
        }
        return null;
    },
    transaction: async (callback) => {
        // Mocking transaction object
        const trx = (table) => {
            return {
                where: (col, val) => ({
                    decrement: (field, amount) => {
                        const client = clientes_api.find(c => c[col] === val);
                        if (client) client[field] -= amount;
                    }
                }),
                insert: (data) => {
                    historial_consumo.push(data);
                }
            };
        };
        await callback(trx);
    }
};
