function check() {
    let speed = document.querySelector("input").value;
    if(speed > 60){
        console.log("Overspeeding");
    } else{
        console.log("Not");
    }
}