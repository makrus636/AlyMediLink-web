const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.route({
        path: '/',
        method: 'GET',
        handler: (request, h) => {
            return 'Hello, Hapi.js!';
        },
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
}

init();