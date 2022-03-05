document.getElementById('createroom-form')
  .addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = document.getElementById('username')
      .value;
    const response = fetch('http://localhost:4444/createroom', {
      method: 'POST',
      body: JSON.stringify({roomName: name}),
      headers: {
        'content-type': 'applicantion/json'
      }
    });
    if (!response.ok) {
      throw new Error();
    }
  });