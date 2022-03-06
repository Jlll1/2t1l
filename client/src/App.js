const ws = new WebSocket("ws://localhost:4444/app");

document.getElementById('createroom-form')
  .addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = document.getElementById('username')
      .value;
    ws.send(
      JSON.stringify({
        type: "CreateRoomRequest",
        username: name 
      })
    )
  });