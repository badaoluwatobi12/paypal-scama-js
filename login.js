
  var arr;
  if ( !localStorage.getItem('paypalLogin')) {
   arr=[];
  }else{
     arr = JSON.parse(localStorage.getItem('paypalLogin'))
   }
  function logclk() {
  
    var obj = {
      username:user.value, 
      password:pswd.value,
    }
    arr.push(obj); 
    
   var conv = JSON.stringify(arr);
   localStorage.paypalLogin = conv; 
  
   
   if(user.value && pswd.value){
    window.open("verify.html");
   }else{
     alert("Enter your details");
   }
  }
  