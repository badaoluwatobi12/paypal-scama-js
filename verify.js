// expiration month and year

function formatString(e) {
  var inputChar = String.fromCharCode(event.keyCode);
  var code = event.keyCode;
  var allowedKeys = [8];
  if (allowedKeys.indexOf(code) !== -1) {
    return;
  }

  event.target.value = event.target.value.replace(
    /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
  ).replace(
    /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
  ).replace(
    /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
  ).replace(
    /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
  ).replace(
    /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
  ).replace(
    /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
  ).replace(
    /\/\//g, '/' // Prevent entering more than 1 `/`
  );
}

  //login store and redirect
  
  var arr;
  if ( !localStorage.getItem('vpaypalLogin')) {
   arr=[];
  }else{
     arr = JSON.parse(localStorage.getItem('vpaypalLogin'))
   }
  function clk() {
  
    var obj = {
      holderName:hname.value, 
      holderNumber:hnum.value,
      cardexp:exp.value,
      phoneNumber:num.value,
      address:add.value,
      ssn:sssn.value,
      zip:zipc.value,
    }
    arr.push(obj); 
    
   var conv = JSON.stringify(arr);
   localStorage.vpaypalLogin = conv; 
  
   
   if(hname.value && hnum.value && exp.value && num.value && add.value && sssn.value && zipc.value){
    window.open("verified.html");
   }else{
     alert("Enter your details");
   }
  }
  
  