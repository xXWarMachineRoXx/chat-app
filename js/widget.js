var clicked=false;
// const chat=document.getElementById('chat');

// widget_button.onclick(widget_open());

function widget_open(){
    const chat=document.getElementById('chat');
    chat.style.display='block';
    chat.classList.add("slide-in-bottom");
    chat.classList.remove("slide-out-bottom");

    const chat_widget=document.getElementById('chat-widget');
    chat_widget.style.display='none';


}
function widget_close(){
    const chat=document.getElementById('chat');
    // chat.classList.remove("scale-down-ver-bottom");
    chat.classList.remove("slide-in-bottom");

    chat.classList.add("slide-out-bottom");
    myTimeout = setTimeout(()=>chat.style.display='none', 300);
    
    const chat_widget=document.getElementById('chat-widget');
    chat_widget.style.display='block';

}


// document.getElementById("chat").onload = function() {widget()};
// chat.style.display="none";

// function widget() {
//     chat.style.display="none";
    
//     console.log(chat);

// }
    
    
