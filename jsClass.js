//function to redirect users based on particular transaction to perform
function navigate(task){
    
    //swith case to check for the page parameter
    switch(task){
          case "deposit":
            window.location.href = "deposit.html";
         break;
         case "withdraw":
            window.location.href = "withdraw.html";
         break;
         case "balance":
            window.location.href = "check_balance.html";
         break;
         case "history":
            window.location.href="history.html";
         break;
         default:
            alert("Invalid Options Selected");
    }
}

let showBalance = document.getElementById("showBalance");

showBalance.innerHTML = `${Number(localStorage.getItem("balance")).toLocaleString()}`;