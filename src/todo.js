//*NAO IMPORTAR NADA 

// *RECEBE O VALOR DO INPUT E QUANDO CLICKAR NO SUBMIT ELE PRINTA O VALOR
   var input= document.querySelector("#inputnota");
   var task=input.value;

   function savetask(){
    var task=input.value;
    console.log(task)
    //* ENVIA O VALOR DO INPUT (task) PARA A DATABASE DA FIREBASE
    firebase.database().ref().child('tasks').push(
           task
      );
     alert('enviou',task)
   
   }
   inputnota.addEventListener('submit',savetask)



