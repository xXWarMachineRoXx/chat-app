var clicked=false;
// const chat=document.getElementById('chat');

// widget_button.onclick(widget_open());

function widget_open(){
    const chat=document.getElementById('chat');
    chat.style.display='block';
    chat.classList.add("scale-up-ver-bottom");
    chat.classList.remove("scale-down-ver-bottom");

    const chat_widget=document.getElementById('chat-widget');
    chat_widget.style.display='none';


}
function widget_close(){
    const chat=document.getElementById('chat');
    chat.classList.remove("scale-down-ver-bottom");
    chat.classList.add("scale-down-ver-bottom");
    myTimeout = setTimeout(()=>chat.style.display='none', 500);
    
    const chat_widget=document.getElementById('chat-widget');
    chat_widget.style.display='block';

}


// document.getElementById("chat").onload = function() {widget()};
// chat.style.display="none";

// function widget() {
//     chat.style.display="none";
    
//     console.log(chat);

// }
    
    
