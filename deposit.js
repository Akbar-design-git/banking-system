document.getElementById("deposit").addEventListener("submit",function(e){

    let amount = document.getElementById("amount");
  
 let newAmount = Number(amount.value); //typecasting

 console.log(newAmount);
    e.preventDefault();
    if(newAmount<0 || isNaN(newAmount)){
           alert("Please enter a Valid Amount!");
           return;
    }
    //localStorage.setItem()
    //localStorage.getItem()
    //localStorage.removeItem()
    let balance = localStorage.getItem("balance") || 0;

    balance += newAmount;

    //save the new value of balance
    localStorage.setItem("balance",balance);

    //Get Existing transaction
    let transaction = JSON.parse(localStorage.getItem("transaction")) || [];

    //push the previous transaction i.e deposit into transaction localstorage 

    transaction.push({
          type: "Deposit",
          amount: newAmount,
          date: new Date().toLocaleString()
    });

    //save the transaction to localstorage 

    localStorage.setItem("transaction",JSON.stringify(transaction));

    alert("Deposit Successful!");

    amount.value = "";
     
});