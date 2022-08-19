const fetch = require("node-fetch");


var Link="https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=perl&site=stackoverflow";


//numero de respuestas contestadas

fetch(Link)
.then((respuesta)=>{
  return respuesta.json()  
}).then((resp)=>{
 
    var contestadas=0;

    for (a in resp.items){

        if (resp.items[a].is_answered== true){
            contestadas++;
        }
        }
    console.log("preguntas contestadas "+contestadas);
    

})

//numero de rsepuestas no contestadas


fetch(Link)
.then((respuesta)=>{
  return respuesta.json()  
}).then((resp)=>{
 
    var nocontestadas=0;

    for (a in resp.items){

        if (resp.items[a].is_answered== false{
            nocontestadas++;
        }
        }
    console.log("preguntas No contestadas "+nocontestadas);
    

})



//3.optener las respuestas con menor numero de vistas


fetch(Link)
.then((respuesta)=>{
  return respuesta.json()  
}).then((resp)=>{
 
var menorvistas =resp.items[0].view_count
var posision ;
    for (a in resp.items){
       
        if (resp.items[a].view_count<= menorvistas){

            menorvistas= resp.items[a].view_count;
            posision =a;
            
        }       
    }
    console.log("menor numero de vistas"+resp.items[posision]);

})


//obtener la respuesta mas vieja y mas actual 


fetch(Link)
.then((respuesta)=>{
  return respuesta.json()  
}).then((resp)=>{
    var menor;
    var mayor;
var x=new Date (resp.items[0].creation_date)
    for (a in resp.items){
      var comparacion =new Date (resp.items[a].creation_date);
        if(x>comparacion){
            menor=a
        }
        if(x<comparacion){
            mayor=a
        }
        
    }

    console.log("respuesta mas vieja "+resp.items[menor]+"respuesta mas actual" +resp.items[mayor] );
    
    

})                




//obtener la respuesta del owner que tenga una mayor reputacion

fetch(Link)
.then((respuesta)=>{
  return respuesta.json()  
}).then((resp)=>{
 
    var mayorowner =resp.items[0].owner.reputation
    var posision ;
        for (a in resp.items){
           
            if (resp.items[a].owner.reputation> mayorowner){
    
                mayorowner=resp.items[a].owner.reputation;
                posision=a;
                
            }       
        }
        console.log("mayor owners"+resp.items[posision].owner)
        
})







