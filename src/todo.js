//*NAO IMPORTAR NADA 

// *RECEBE O VALOR DO INPUT E QUANDO CLICKAR NO SUBMIT ELE PRINTA O VALOR
var input = document.querySelector("#inputnota")
var task = input.value;
//  var gmailregistro = document.getElementById("gmailregistro").value;




 // //*VAI BUSCAR O NOME À DATABASE E
  // firebase.database().ref('nomes').on("child_added", function (snapshot) {
  //   if (snapshot.exists()) {
  //     namedatabase = snapshot.val()
  //     console.log('nome:', snapshot.val());
  //   }
  //   else {
  //     console.log("an error was detected")
  //   }
  // });
  
function savetask() {
//*VAI BUSCAR O NOME À LOCALSTORAGE E DEFINE-O COMO nome
  var nome = localStorage.getItem('nomedaconta');
  console.log('utilizador atual:',nome);

  var task = input.value;
  //* ENVIA O VALOR DO INPUT (task)  ASSOCIADO AO NOME RECOLHIDO  PELA LOCALSTORAGE PARA A DATABASE DA FIREBASE
  firebase.database().ref('nomes').child(nome).push(
    task
  );
  console.log('A seguinte tarefa foi enviada para a database:', task)

}
inputnota.addEventListener('submit', savetask)

