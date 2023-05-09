alert(document.location);
alert(document.cookie);

const path = prompt();
if (path) {
  fetch(`${path}`)
    .then((response) => response.text())
    .then((conteudo) => {
      console.log(conteudo);
    })
    .catch((error) => {
      console.log(error);
    });
}
