
const phonePrice = 1219;
const phoneCasePrice = 59;

// Function to get the value from an input Field
function getInputValueById(inputFieldId){
const inputField = document.getElementById(inputFieldId);
const inputValue = inputField.value;
return inputValue;
}

// Function to increment the value by 1 and set it to input Field.
function incrementValue(inputFieldId){
    const currentValue = getInputValueById(inputFieldId);
    const newValue = parseInt(currentValue) + 1;
    const inputField = document.getElementById(inputFieldId);
    inputField.value = newValue;
}

// Function to decrement the value by 1 and set it to input Field.
function decrementValue(inputFieldId){
    const currentValue = getInputValueById(inputFieldId);
    const newValue = currentValue - 1;
    if(newValue<0){
        return;
    }
    const inputField = document.getElementById(inputFieldId);
    inputField.value = newValue;
}

// Function to calculate the total price and set it to the element..
function itemTotalPrice(qtyFieldId, totalElementId, itemPrice){
    const quantity = getInputValueById(qtyFieldId);
    const totalPrice = quantity * itemPrice;
    const totalElementFiled = document.getElementById(totalElementId);
    totalElementFiled.innerText = totalPrice;
}

// Function Subtotal
function subTotal(){
    const phoneTotalElementFiled = document.getElementById('phone-total');
    const phoneTotalPrice = parseInt(phoneTotalElementFiled.innerText);
    const phoneCaseTotalElementFiled = document.getElementById('case-total');
    const phoneCaseTotalPrice = parseInt(phoneCaseTotalElementFiled.innerText);

    // Subtotal Calculation
    const subTotal = phoneTotalPrice + phoneCaseTotalPrice;
    const subTotalElement = document.getElementById('subtotal');
    subTotalElement.innerText = subTotal;

    // Tax Calculation   
    const taxElementFiled = document.getElementById('tax');
    const taxString = (subTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    taxElementFiled.innerText = tax;
    
    // Total calculation
    const totalElementFiled = document.getElementById('total');
    const total = subTotal + tax;
    totalElementFiled.innerText = total;
}

// Phone Case Section 

// Minus Button
document.getElementById('case-btn-minus').addEventListener('click', function(){
    decrementValue('case-input');
    itemTotalPrice('case-input', 'case-total', phoneCasePrice);
    subTotal();
});

// Plus Button
document.getElementById('case-btn-plus').addEventListener('click', function(){
    incrementValue('case-input');
    itemTotalPrice('case-input', 'case-total', phoneCasePrice);
    subTotal();
    
});

// Phone Section 
// Plus Button
document.getElementById('phone-btn-plus').addEventListener('click', function(){
    incrementValue('phone-input');
    itemTotalPrice('phone-input', 'phone-total', phonePrice);
    subTotal();
    
});
// Minus Button
document.getElementById('phone-btn-minus').addEventListener('click', function(){
    decrementValue('phone-input');
    itemTotalPrice('phone-input', 'phone-total', phonePrice);
    subTotal();
    
});







