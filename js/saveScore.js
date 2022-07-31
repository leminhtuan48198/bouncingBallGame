function saveScore(){
    localStorage.setItem(username,num.toFixed(0))
    document.getElementById("hightscore").innerHTML=localStorage.getItem(username)
}