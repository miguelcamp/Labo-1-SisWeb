var contador=0;
var usernames=[];
var passwords=[];

var jsonObj={ 
  Usuario: [],
  Contrasena: [],

}

//Los datos capturados tanto del acceso como del registro, deben ser impresos en la consola
// del navegador y almacenados en un archivo de texto o JSON local.
function login()
{
  var user;
  var pass;
  user=document.getElementById('input_usuario').value;
  pass=document.getElementById('input_password').value;
  console.log(document.getElementById('input_usuario').value);
  console.log(document.getElementById('input_password').value);
 
  usernames[contador]= user;
  passwords[contador]= pass;
  contador++;
  var resetButton = document.getElementById("input_usuario");
    if(resetButton){
        resetButton.value= "";
   }
    resetButton = document.getElementById("input_password");
    if(resetButton){
        resetButton.value= "";
   }
}
function guardarAJSON()
{
  console.log( contador);
  for (i = 0; i < contador; i++) {
    jsonObj.Usuario[i]=usernames[i];
    jsonObj.Contrasena[i]=passwords[i];
    console.log(usernames[i], " ", passwords[i]);
  } 
  this.log();
}
function log()
{
  
  var fileText=new Blob([JSON.stringify(jsonObj)],{type:"application/json"});
    var textURL=window.URL.createObjectURL(fileText);    
    var downloadLink=document.createElement("a");
    downloadLink.download="log.json";
    downloadLink.innerHTML="";
    downloadLink.href=textURL;
    document.body.appendChild(downloadLink);
    downloadLink.click();
}