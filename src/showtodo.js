// *MOSTRAR AS TAREFAS NA TELA 

//*VAI BUSCAR O NOME À LOCALSTORAGE E DEFINE-O COMO nome
var nome = localStorage.getItem('nomedaconta');
//*LÊ O ULTIMO VALOR REJISTRADO  NO NOME
firebase.database().ref('nomes').child(nome).on("child_added",function(snapshot)  {
    var content = ''
 // *mostrar o snapshot val()
         content += "<li >";
            content +=  snapshot.val();
         content += "</li>";
 
         document.getElementById("todos").innerHTML += content;
        
 if (snapshot.exists()) {
    console.log(" data available");
    console.log('tarefa:',snapshot.val());
  }
  else{
    console.log("an error was detected" )
  }
});
