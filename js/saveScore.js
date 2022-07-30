function saveScore(){
    localStorage.setItem(username,username+" "+num.toFixed(0))
    document.getElementById("hightscore").innerHTML=localStorage.getItem(username)
}