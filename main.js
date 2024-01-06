// finds the browser
if ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/webOS/i)) || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/BlackBerry/i)) || (navigator.userAgent.match(/Windows Phone/i))) {
//redirects
location.replace("https://estellespaoakville.ca/m/");
}



document.addEventListener("keydown", function (event){
    if(event.keyCode == 123){
       event.preventDefault();
    }
});

document.addEventListener('contextmenu', 
     event => event.preventDefault()
);

document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
return false;
}
else
{
return true;
}
});