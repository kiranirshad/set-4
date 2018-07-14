 let noOfApples;
 let noOfBananas;
  let noOfMangoes;
 let costOfApples = 10;
 let costOfBananas = 15; 
 let costOfMangoes = 8;
 function calCost() {
     noOfApples = document.querySelector("#apples").value;
     noOfBananas = document.querySelector("#bananas").value;
     noOfMangoes = document.querySelector("#mangoes").value;
     let totalCost = noOfApples*costOfApples +noOfBananas*costOfBananas +noOfMangoes*costOfMangoes;
     console.log(totalCost);
 }  