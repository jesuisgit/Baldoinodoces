document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formContato');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const dados = new FormData(form);
      let mensagem = "Dados enviados:\n";
      for (let [chave, valor] of dados.entries()) {
        mensagem += `${chave}: ${valor}\n`;
      }
      alert(mensagem);
    });
  }
});
