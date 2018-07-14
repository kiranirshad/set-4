let mathMarks;
let engMarks;
let compMarks;
function check() {
    mathMarks = document.querySelector("#math").value;
    engMarks = document.querySelector("#english").value;
    compMarks = document.querySelector("#computer").value;
    if(mathMarks>20 && engMarks>10 && compMarks>50){
        console.log("You hane passed the tech karo admision test");
      } else {
            console.log("Try again next time");
        }


}