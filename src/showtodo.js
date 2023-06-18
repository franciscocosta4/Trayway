// *MOSTRAR AS TAREFAS NA TELA 

firebase.database().ref('tasks').on("child_added",function(snapshot)  {
    var content = ''
 // *mostrar o snapshot val()
         content += "<li>";
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