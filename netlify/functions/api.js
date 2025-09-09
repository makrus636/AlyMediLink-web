const Hapi = require('@hapi/hapi');
const serverless = require('serverless-http');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    server.route([{
        method: 'GET',
        path: '/.netlify/functions/api',
        handler: () => { return { message: 'Hello, world!' }; },
    },
    {
        method: 'POST',
        path: '/.netlify/functions/api',
        handler: (request) => {
            const payload = request.payload;
            return { received: 'anda melakukan post' };
        },
    }]);
    await server.initialize();
    return server;

}

let handler;
module.exports.handler = async (event, context) => {
    if (!handler) {
        const server = await init();
        handler = serverless(server.listener);
    }
    return handler(event, context);
}