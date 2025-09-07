const Hapi = require('@hapi/hapi');
const serverless = require('serverless-http');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: () => { return { message: 'Hello, world!' }; },
    });
    await server.initialize();
    return server.listener;

}

let handler;
module.exports.handler = async (event, context) => {
    if (!handler) {
        const server = await init();
        handler = serverless(server);
    }
    return handler(event, context);
}