// document.getElementById("increase").addEventListener('click',function(){
//     let firstClassInput = document.getElementById("firstClass-Count");
//     console.log(firstClassInput);
//     let firstClassCount = Number((firstClassInput.value));
//     const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;
//  })


// document.getElementById("increase").addEventListener('click',function(){
//    handleFirstTicket(true);
// })
// document.getElementById("decrease").addEventListener('click',function(){
//     let firstClassInput = document.getElementById("firstClass-Count");
//     console.log(firstClassInput);
//     let firstClassCount = Number((firstClassInput.value));
//     const firstClassNewCount = firstClassCount - 1;
//     firstClassInput.value = firstClassNewCount;
//  })


// document.getElementById("decrease").addEventListener('click',function(){
//    handleFirstTicket(false);
// })
// document.getElementById("eco-increase").addEventListener('click',function(){
//     let firstClassInput = document.getElementById("economy-Count");
//     let firstClassCount = Number((firstClassInput.value));
//      const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;
// })
// document.getElementById("eco-increase").addEventListener('click',function(){
//     handleSecondTicket(true);
//     })

// document.getElementById("eco-decrease").addEventListener('click',function(){
//     let economyClassInput = document.getElementById("economy-Count");
//     let economyClassCount = Number((economyClassInput.value));
//     let  economyClassNewCount = economyClassCount - 1;
//     economyClassInput.value = economyClassNewCount;
 // })
// document.getElementById("eco-decrease").addEventListener('click',function(){
//     handleSecondTicket(false);
//     })

// function handleFirstTicket(isConfirm){
    
//         let firstClassInput = document.getElementById("firstClass-Count");
//         console.log(firstClassInput);
//         let firstClassCount = Number((firstClassInput.value));
        
//         //  const firstClassNewCount = firstClassCount + 1;
//         let firstClassNewCount = firstClassCount;
//         if(isConfirm == true){
//             firstClassNewCount = firstClassCount + 1 ;
            
//         };
//         if (isConfirm == false & firstClassCount > 0){
//             firstClassNewCount = firstClassCount - 1 ;
//         };
//         firstClassInput.value = firstClassNewCount;
//     }
//     function handleSecondTicket(isConfirm){
//         let secondInput = document.getElementById("economy-Count");
//         let secondCount = Number((secondInput.value));
//         //const firstClassNewCount = firstClassCount + 1;
//         let secondNewCount = secondCount;
//         if (isConfirm == true ){
//             secondNewCount = secondCount + 1 ;
//         };
//         if (isConfirm == false & secondCount > 0 ){
//             secondNewCount = secondCount -1 ;
//         }
        
//         secondInput.value = secondNewCount;
//     }

function handleTicket(ticket , isConfirm){
    
    let ticketInput = document.getElementById( ticket + "-Count");
    
    let ticketCount = Number((ticketInput.value));
    
    //  const firstClassNewCount = firstClassCount + 1;
    let ticketNewCount = ticketCount;
    if(isConfirm == true){
        ticketNewCount = ticketCount + 1 ;
        
    };
    if (isConfirm == false & ticketCount > 0){
        ticketNewCount = ticketCount - 1 ;
    };
    ticketInput.value = ticketNewCount;
    calculateTotal ();
 
}
function calculateTotal (){
    let firstInput = document.getElementById("firstClass-Count");
    console.log(firstInput);
    let firstCount = Number(firstInput.value);

    let secondInput = document.getElementById("economy-Count");
    let secondCount = Number(secondInput.value);

    const ticketTotal = firstCount * 150 +  secondCount *  100;
    document.getElementById("subtotal").innerText = '$' + ticketTotal;

    const vat = ticketTotal * 0.1;
    document.getElementById("vat-total").innerText = '$' + vat;

    const finalTotal = ticketTotal + vat ;
    document.getElementById("finalTotal").innerText = '$' + finalTotal;
    
}


  
  document.getElementById("btn-book").addEventListener('click', function(){
     const areaBooking = document.getElementById("magic-area")
     areaBooking.style.display = "none";
     const confirmArea = document.getElementById("confirm-area");
     confirmArea.style.display = "block";
  })
  
  
