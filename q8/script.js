function check() {
    let name = document.querySelector("input").value;
    let isLoggedIn = true
    if(isLoggedIn=== true){
        alert("welcome," + name);
    } else{
        alert("Please log in to continue");
    }
}