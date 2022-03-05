document.getElementById('createroom-form')
  .addEventListener('submit', function (ev) {
    ev.preventDefault();
    const name = document.getElementById('username')
      .value;
    console.log(name);
  });