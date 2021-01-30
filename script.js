document.getElementById("increase").addEventListener('click',function(){
   handleFirstTicket(true);
})
// document.getElementById("decrease").addEventListener('click',function(){
//    handleFirstTicket(false);
// })
// document.getElementById("eco-increase").addEventListener('click',function(){
//     let firstClassInput = document.getElementById("economy-Count");
//     let firstClassCount = Number((firstClassInput.value));
//      const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;
// })
// document.getElementById("eco-decrease").addEventListener('click',function(){
//     let economyClassInput = document.getElementById("economy-Count");
//     let economyClassCount = Number((economyClassInput.value));
//     let  economyClassNewCount = economyClassCount - 1;
//     economyClassInput.value = economyClassNewCount;
// })
function handleFirstTicket(isIncrease){
    document.getElementById("increase").addEventListener('click',function(){
        console.log("clicked");
        let firstClassInput = document.getElementById("firstClass-Count");
        console.log(firstClassInput);
        let firstClassCount = Number((firstClassInput.value));
        console.log(firstClassCount);
        //  const firstClassNewCount = firstClassCount + 1;
        let firstClassNewCount = firstClassCount;
        if(isIncrease == true){
            firstClassNewCount = firstClassCount + 1 ;
            console.log(firstClassNewCount);
        }
        if (isIncrease == false && firstClassCount > 0){
            firstClassNewCount = firstClassCount - 1 ;
        }
       
        firstClassInput.value = firstClassNewCount;
    })
}
  

  

  
