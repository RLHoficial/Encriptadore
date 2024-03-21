function encrypt() {
  var message = document.getElementById('message').value;
  var encryptedMessage = '';
  var shift = 3; // Cambiar el número de desplazamiento según sea necesario

  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      encryptedMessage += message.charAt(i);
    }
  }

  document.getElementById('output').value = encryptedMessage;
}

function decrypt() {
  var message = document.getElementById('message').value;
  var decryptedMessage = '';
  var shift = 3; // Cambiar el número de desplazamiento según sea necesario

  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      decryptedMessage += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      decryptedMessage += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
    } else {
      decryptedMessage += message.charAt(i);
    }
  }

  document.getElementById('output').value = decryptedMessage;
}
