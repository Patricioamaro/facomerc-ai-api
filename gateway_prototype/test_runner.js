
const http = require('http');

function testRequest(name, apiKey, service) {
    const data = JSON.stringify({
        servicio: service || 'chat_gpt_4',
        payload: { prompt: "Hola" }
    });

    const options = {
        hostname: 'localhost',
        port: 3001,
        path: '/api/ejecutar-servicio',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
            'x-api-key': apiKey
        }
    };

    const req = http.request(options, (res) => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
            console.log(`\n--- TEST: ${name} ---`);
            console.log(`Status: ${res.statusCode}`);
            console.log(`Response: ${body}`);
        });
    });

    req.on('error', (e) => {
        console.error(`Problem with request ${name}: ${e.message}`);
    });

    req.write(data);
    req.end();
}

// Wait for server to start roughly
setTimeout(() => {
    testRequest("Cliente RICO (Debe funcionar)", "key_cliente_rico");
    testRequest("Cliente POBRE (Debe fallar por saldo)", "key_cliente_pobre");
    testRequest("Cliente SUSPENDIDO (Debe fallar por bloqueo)", "key_cliente_malo");
    testRequest("Cliente DESCONOCIDO (Debe fallar por auth)", "key_cualquiera");
}, 2000);
