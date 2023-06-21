let gmail = document.querySelector("#gmail")
let senha = document.querySelector("#senha")
let botao = document.querySelector('#botao')



// *MUDAR COR DA SENHA E  GMAIL SE FOR INVALIDO (KEYUP)

gmail.addEventListener('keyup', () => {
    if (gmail.value.length <= 7) {
        gmail.setAttribute('style', 'color: red')
        gmail.setAttribute('style', 'border-color: red')
        botao.setAttribute('style', 'display: none')

    }
    else {

        botao.setAttribute('style', 'display: inline')
        gmail.setAttribute('style', 'color: #73ff00 ')
        gmail.setAttribute('style', 'border-color: #73ff00')
    }

})


senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        senha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')

        botao.setAttribute('style', 'display: none')


    }
    else {
        botao.setAttribute('style', 'display: inline')

        senha.setAttribute('style', 'color: #73ff00 ')
        senha.setAttribute('style', 'border-color: #73ff00')
    }
})


// *MUDAR COR DA SENHA E  GMAIL SE FOR INVALIDO (CLICK NO BOTAO)

botao.addEventListener('click', () => {
    if (senha.value.length <= 5) {
        senha.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
    }
    else {
        senha.setAttribute('style', 'color: #73ff00 ')
        senha.setAttribute('style', 'border-color: #73ff00')
    }
    console.log('validsenha:', senha)

})

botao.addEventListener('click', () => {
    if (gmail.value.length <= 7) {
        gmail.setAttribute('style', 'color: red')
        gmail.setAttribute('style', 'border-color: red')
    }
    else {
        gmail.setAttribute('style', 'color: #73ff00 ')
        gmail.setAttribute('style', 'border-color: #73ff00')
    }
    console.log('validgmail:', gmail)

})



//*FUNCAO GUARDAR O NOME DO USUARIO NA DATABASE
function savename(nome) {
    var nome = document.getElementById("nome").value;
    //* save in database
    firebase.database().ref('nomes').child(nome).push(

    );
    console.log('teu nome:', nome)
    localStorage.setItem('nomedaconta', nome);
    console.log(localStorage.getItem('nomedaconta'))
    //* prevent form from submitting
    return false
}


//*funcao de login  

function login() {

    console.log('antes')
    firebase.auth().signInWithEmailAndPassword(gmail.value, senha.value).then(response => {
        console.log('success', response)
        window.location.href = 'index.html'
    }).catch(error => {
        alert(error)
        console.log('error', error)
        console.log('erro na firebase  ')
    });
    console.log('depois')
    console.log('nomeconta:', nome)
        //* funcao mostrar erro se houver 
        .catch((error) => {
            var errorMessage = error.message;
            // *console logs
            console.log('error :', errorMessage)
            alert('An error was found : ', errorMessage)
        });
}
