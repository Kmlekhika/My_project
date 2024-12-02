
//document.getElementById('button1').addEventListener('click',function(){
   // alert('warning: Not click!');

//});

  
  
/*function  showError(){

    const message=document.getElementById('message');
    message.textcontent='error: not click!';
    message.style.color='red';*/

//}

function showError() {
    const message = document.getElementById('message');
    if (message) {
        message.textContent = ' Something went wrong!';
        message.style.color = 'red';
    }}
function Good() {

    const message = document.getElementById('message');
   // message.textContent = "have a great day!";
    message.style.color = 'green'; // Change text color to green
    //let name = "lekhika";
//alert("Hello, " + name + "have a great day"+"!");
    alert('Here is a message: have a great day!');

  }

//document.getElementById('button2').addEventListener('click',function(){
 //   alert('Here is a message: have a great day!');
//});