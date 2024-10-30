import { WebSocketServer } from 'ws';

let wss = new WebSocketServer({ port: 6969 });

wss.on('connection', ws => {
    console.log('A new client connected!');

    ws.on('message', message => {
        console.log('Received: %s', message);
        ws.send(`Echo: ${message}`);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.on('error', err => {
        console.error('WebSocket error:', err);
    });
});

console.log(`WebSocket server started on ws://localhost:6969`);
