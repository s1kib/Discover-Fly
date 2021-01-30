document.getElementById("increase").addEventListener('click',function(){
    const firstClassInput = document.getElementById("firstClass-Count");
    let firstClassCount = Number((firstClassInput.value));
    const  firstClassNewCount = firstClassCount++;
    firstClassInput.value = firstClassNewCount;
})
document.getElementById("decrease").addEventListener('click',function(){
    const firstClassInput = document.getElementById("firstClass-Count");
    let firstClassCount = Number((firstClassInput.value));
    const  firstClassNewCount = firstClassCount++;
    firstClassInput.value = firstClassNewCount;
})
  

  
