// Optional under deployment


document.getElementById('case-remove').addEventListener('click', function(){
    const userResponse = confirm("Do you want to delete?");
     if(userResponse == true){
         const phoneSection = document.getElementById('case-section');
         phoneSection.remove();
         
         const phoneTotalElementFiled = document.getElementById('phone-total');
         const phoneTotalPrice = parseInt(phoneTotalElementFiled.innerText);
         const subTotalElement = document.getElementById('subtotal');
         subTotalElement.innerText = phoneTotalPrice;
 
         const taxElementFiled = document.getElementById('tax');
         const taxString = (phoneTotalPrice * 0.1).toFixed(2);
         const tax = parseFloat(taxString);
         taxElementFiled.innerText = tax;
 
         const totalElementFiled = document.getElementById('total');
         const total = phoneTotalPrice + tax;
         totalElementFiled.innerText = total;
     }
 });

 document.getElementById('phone-remove').addEventListener('click', function(){
    const userResponse = confirm("Do you want to delete?");
     if(userResponse == true){
         const phoneSection = document.getElementById('phone-section');
         phoneSection.remove();
         
         const phoneCaseTotalElementFiled = document.getElementById('case-total');
         const phoneCaseTotalPrice = parseInt(phoneCaseTotalElementFiled.innerText);
         const subTotalElement = document.getElementById('subtotal');
         subTotalElement.innerText = phoneCaseTotalPrice;
 
         const taxElementFiled = document.getElementById('tax');
         const taxString = (phoneCaseTotalPrice * 0.1).toFixed(2);
         const tax = parseFloat(taxString);
         taxElementFiled.innerText = tax;
 
         const totalElementFiled = document.getElementById('total');
         const total = phoneCaseTotalPrice + tax;
         totalElementFiled.innerText = total;
     }
 });