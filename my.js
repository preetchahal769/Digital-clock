setInterval(myFunction, 200)

function myFunction() {
    var time = new Date();
    var hours = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    
    var am_pm = "am"

    if (hours < 12) {
        am_pm = "AM"

    } else {
        am_pm = "PM"

    }
    if (min < 10) {
        min = "0" + min

    } else {
        min = min

    }
    if (sec < 10) {
        sec = "0" + sec

    } else {
        sec = sec

    }
    if (hours > 12) {
       hours = hours - 12 ;

        
        

        
    } else{
        hours = hours ;

    } 

    document.getElementById("pg").innerHTML = hours + ":" + min + ":" + sec + " " + am_pm;
    document.getElementById("pg").style.fontSize = "60px";
    document.getElementById("pg").style.display = "center";





}
