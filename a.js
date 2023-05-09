alert(document.location);
alert(document.cookie);

const file = prompt();
if (file) {
  fetch(`/${file}`)
    .then((response) => response.text())
    .then((conteudo) => {
      console.log(conteudo);
    })
    .catch((error) => {
      console.log(error);
    });
}
