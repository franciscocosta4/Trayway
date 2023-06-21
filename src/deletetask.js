//*NAO IMPORTAR NADA 

var botao = document.querySelector("#remover");
var lista = document.getElementById('lista');

//!Atenção: pode dar erro no futuro porque para além de eleminar tarefa tambem elimina o nome da database
function removeTask() {
   var nome = localStorage.getItem('nomedaconta'); //*VAI BUSCAR O NOME À LOCALSTORAGE 
   console.log('utilizador atual:', nome);
   firebase.database().ref('nomes').child(nome).remove() //* REMOVE TAREFAS DA PAGINA INICIAL 
   console.log(nome, 'removeu as tarefas')
   location.reload()

}
remover.addEventListener('submit', removeTask)
console.log('utilizador atual:', nome);



//*COMEÇO DA FUNÇÃO QUE SE A PÁGINA DER REFRESH MUDA A FRASE */
p1 = document.getElementById('p1')
const frases = ["Now is the time", "Keep up", "just focus"];


//*VERIFICA SE A PAGINA LEVOU REFRESH
let data = window.performance.getEntriesByType("navigation")[0].type;

if (data == 'reload') {
   p1.remove(); //* remove o paragrafo inicial

   var randomIndex = Math.floor(Math.random() * frases.length);//* cria um  random index com  o comprimento da aray (chatgpt)
   var randomFrase = frases[randomIndex];   //* pega em uma frase usanod o  random index
   console.log('frase atual:', randomFrase);

   var content = ''
   content += "<p id='p1'>";
   content += "<li>" + randomFrase + "</li>"; //*mostra a randomFrase
   content += "</p>";
   document.getElementById("smallBox").innerHTML += content;
   console.log(data)
}
