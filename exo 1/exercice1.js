//Votre code ci dessous
let monimage=document.getElementById("cat-pic");
let chat= document.getElementById("cat-chat");

function miauler(){
    chat.innerText= "Bruits de ron-rons";
}

monimage.addEventListener("click",function (){
    miauler()
    //console.log(' le bouton a été déclenché')
    }
)




