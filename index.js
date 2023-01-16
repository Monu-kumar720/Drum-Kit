

var len=document.querySelectorAll(".drum").length;
for (var i=0;i<len;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleCLick);
    
   
    document.addEventListener("keydown",function(event){
        
        makesound(event.key);
        buttonAnimation(event.key);
        
        // console.log(event.key) 
    })
    
    
}

function handleCLick(){
    // alert("i just got clicked");
    // this.style.color="white";
    var character=this.innerHTML;
     makesound(character);
    buttonAnimation(character);
    if(character=="w")
    {
        var audio = new Audio('sounds\\tom-1.mp3');
        audio.play();
    }
    else if(character=="a")
    {
        var audio = new Audio('sounds\\tom-2.mp3');
        audio.play();
    }
    else if(character=="s")
    {
        var audio = new Audio('sounds\\tom-3.mp3');
        audio.play();
    }
    else if(character=="d")
    {
        var audio = new Audio('sounds\\tom-4.mp3');
        audio.play();
    }
    else if(character=="j")
    {
        var audio = new Audio('sounds\\crash.mp3');
        audio.play();
    }
    else if(character=="k")
    {
        var audio = new Audio('sounds\\kick-bass.mp3');
        audio.play();
    }
    else if(character=="l")
    {
        var audio = new Audio('sounds\\snare.mp3');
        audio.play();
    }
    
    

}

function makesound(character)
{
    // var character=this.innerHTML;
    if(character=="w")
    {
        var audio = new Audio('sounds\\tom-1.mp3');
        audio.play();
    }
    else if(character=="a")
    {
        var audio = new Audio('sounds\\tom-2.mp3');
        audio.play();
    }
    else if(character=="s")
    {
        var audio = new Audio('sounds\\tom-3.mp3');
        audio.play();
    }
    else if(character=="d")
    {
        var audio = new Audio('sounds\\tom-4.mp3');
        audio.play();
    }
    else if(character=="j")
    {
        var audio = new Audio('sounds\\crash.mp3');
        audio.play();
    }
    else if(character=="k")
    {
        var audio = new Audio('sounds\\kick-bass.mp3');
        audio.play();
    }
    else if(character=="l")
    {
        var audio = new Audio('sounds\\snare.mp3');
        audio.play();
    }
    
}

function buttonAnimation(key){
    var Activebutton=document.querySelector("."+key);
    Activebutton.classList.add("pressed");
    setTimeout(function()
    {
        Activebutton.classList.remove("pressed"); 100
    })
}







