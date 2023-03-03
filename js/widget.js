var clicked=false;
// const chat=document.getElementById('chat');

// widget_button.onclick(widget_open());
document.querySelector('button').addEventListener('click', () => {
    // Send a message to the parent window with the new height
    window.parent.postMessage({ height: 2000 }, '*');
  });
function widget_open(){
    // const chat=document.getElementById('chat');
    // chat.style.display='block';
    // chat.classList.add("slide-in-bottom");
    // chat.classList.remove("slide-out-bottom");
    // iframe = document.getElementsByTagName('iframe')[0];
    // console.log(iframe);
    // iframe.style.width = '100%';
    // iframe.style.height = '100%';
    // const chat_widget=document.getElementById('chat-widget');
    // chat_widget.style.display='none';


}
function widget_close(){
    // const chat=document.getElementById('chat');
    // // chat.classList.remove("scale-down-ver-bottom");
    // chat.classList.remove("slide-in-bottom");
    // chat.classList.add("slide-out-bottom");

    // myTimeout = setTimeout(()=>chat.style.display='none', 300);
    // iframe = document.getElementsByTagName('iframe')[0];
    // console.log(iframe);

    // // iframe.style.width = '100px';
    // // iframe.style.height = '100px';
    // const chat_widget=document.getElementById('chat-widget');
    // chat_widget.style.display='block';

}


// document.getElementById("chat").onload = function() {widget()};
// chat.style.display="none";

// function widget() {
//     chat.style.display="none";
    
//     console.log(chat);

// }
    
    
