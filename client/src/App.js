const ws = new WebSocket("ws://localhost:4444/app");

ws.addEventListener("message", function (ev) {
  console.log(ev);
});

document.getElementById('joinroom-form')
  .addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = document.getElementById('username').value;
    const roomId = document.getElementById('room-id').value;
    ws.send(
      JSON.stringify({
        type: "JoinRoomRequest",
        roomId: roomId,
        username: name 
      })
    )
  });