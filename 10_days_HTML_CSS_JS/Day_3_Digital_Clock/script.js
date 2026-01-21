
let div = document.getElementById('time')
let toDate = document.getElementById('date')

function displayTime(){
    let date = new Date();
    
    div.textContent = date.toLocaleTimeString();
     
    // console.log(date.getHours() + " : " + date.getMinutes()+ " : " +date.getSeconds());
    toDate.textContent = date.toDateString();
}

setInterval(displayTime,1000)