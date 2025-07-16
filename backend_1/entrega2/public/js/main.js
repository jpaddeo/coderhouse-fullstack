const socket = io();
socket.on('connect', () => {
  console.log('Conectado al servidor de WebSocket');
});
socket.on('disconnect', () => {
  console.log('Desconectado del servidor de WebSocket');
});
