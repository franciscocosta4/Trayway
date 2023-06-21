//* Indica que o estado será mantido somente na sessão e será apagado quando a guia ou janela que fez a autenticação for fechada.
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(() => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });

//*É USADO PARA CASO NAO ESTEJA LOGADO IR PARA A PAGINA WELCOME
firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location.href = 'welcome.html'
  }
})
