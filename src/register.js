let gmailregistro = document.querySelector('#gmailregistro')
let senharegistro = document.querySelector('#senharegistro')


// *MUDAR COR DA SENHA E  GMAIL SE FOR INVALIDO (KEYUP)

gmailregistro.addEventListener('keyup', () => {
  if(gmailregistro.value.length <= 7){
      gmailregistro.setAttribute('style', 'color: red')
      gmailregistro.setAttribute('style','border-color: red')  
      botao.setAttribute('style','display: none')
    //   msgError.setAttribute('style', 'display:block')
    //   msgError.innerHTML = '<strong>The gmail needs to have 8 caracters or more</strong>'
    //   msgSuccess.setAttribute('style','display:none')
      }
  else{  
    //   msgError.setAttribute('style', 'display:hidden')
      botao.setAttribute('style','display: inline')
      gmailregistro.setAttribute('style', 'color: #73ff00 ')
      gmailregistro.setAttribute('style','border-color: #73ff00')
  }


})


senharegistro.addEventListener('keyup', () => {
  if(senharegistro.value.length <= 5){
      senharegistro.setAttribute('style', 'color: red')
      senharegistro.setAttribute('style','border-color: red')
    //   msgError.setAttribute('style', 'display:block')
    //   botao.setAttribute('style','display: none')
    //   msgError.innerHTML = '<strong>The password needs to have 8 caracters or more</strong>'
    //   msgSuccess.setAttribute('style','display:none')
        
      }
  else{
    //   botao.setAttribute('style','display: inline')
    //   msgError.setAttribute('style', 'display:none')
      senharegistro.setAttribute('style', 'color: #73ff00 ')
      senharegistro.setAttribute('style','border-color: #73ff00')
  }
  
})


// *MUDAR COR DA SENHA E  GMAIL SE FOR INVALIDO (CLICK NO BOTAO)

botao.addEventListener('click', ()=>{
  if(senharegistro.value.length <= 5){
      senharegistro.setAttribute('style', 'color: red')
      senharegistro.setAttribute('style','border-color: red') 
      }
  else{
      senharegistro.setAttribute('style', 'color: #73ff00 ')
      senharegistro.setAttribute('style','border-color: #73ff00')     
  }
  console.log('senharegistro:', senharegistro)

})

botao.addEventListener('click', ()=>{
  if(gmailregistro.value.length <= 7){
      gmailregistro.setAttribute('style', 'color: red')
      gmailregistro.setAttribute('style','border-color: red')
      }
 else {
      gmailregistro.setAttribute('style', 'color: #73ff00 ')
      gmailregistro.setAttribute('style','border-color: #73ff00')
  }
  console.log( 'gmailregistro:', gmailregistro)

})


//* FUNCAO GUardar O gmails DO USUARIO NA DATABASE
function savegmail(gmailregistro) {
  // *get variables
  var gmailregistro = document.getElementById("gmailregistro").value;
  // *save in database
  firebase.database().ref('gmails').push(
    gmailregistro,
    );
    //!ERRO ELE SUBSTITUI INVES DE ADICIONAR USUARIO //>RESOLVIDO
 console.log(nomeregistro)
  //* prevent form from submitting
  return false;
}



//*FUNCAO REGISTRAR 
function registrar(){
  console.log('antes')
firebase.auth().createUserWithEmailAndPassword(gmailregistro.value, senharegistro.value)
.then((userCredential) => {
  var user = userCredential.user;
  //*console logs
  console.log(userCredential)
  console.log(' redirecionando para home')
  window.location.href= 'login.html'
  
})
.catch((error) => {
  var errorMessage = error.message;
  // *console logs
  console.log(errorMessage)
  alert(errorMessage)
});
}

