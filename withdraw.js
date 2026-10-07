//localstorage for balanace exist, create one if it does not exist
if(localStorage.getItem("balance")==null){
      localStorage.setItem("balance",0);
}

if(localStorage.getItem("transactions")==null){
    localStorage.setItem("transactions",JSON.stringify([]));
}

//Get Element
let amount = document.getElementById("amount");

form = document.getElementById("withdrawForm");

form.addEventListener("submit",(e)=>{
      e.preventDefault();

      let withdrawAmount = Number(amount.value);

      if(withdrawAmount < 0 || isNaN(withdrawAmount)){
          alert("Please Enter Valid Amount");
      }

      let balance = Number(localStorage.getItem("balance"));

      if(withdrawAmount > balance){
         alert("Insufficient Balance");
      }
      balance = balance - withdrawAmount;

      //update the value of balance in the localstorage
      localStorage.setItem("balance",balance);
      
      //get transaction in the localStorage
      let transactions = JSON.parse(localStorage.getItem("transactions"));

      transactions.push({
          type: "Withdrawal",
          amount: withdrawAmount,
          date: new Date().toLocaleString()
      });

      //update transaction history in the localStorage:
      localStorage.setItem("transactions",JSON.stringify(transactions));

      alert(withdrawAmount + " " +"has been withdrawn Successfully!");
       
      window.setTimeout(()=>{
           window.location.href = "jsClass.html";
      },5000)
     

      amount.value  = "";

});
