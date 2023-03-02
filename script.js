let DisplayTimer=document.querySelector('.DisplayTimer')
let[hours,minutes,seconds,milliseconds]=[0,0,0,0]
let int=null
document.getElementById('startBtn').addEventListener('click',()=>{
    if(int!==null){
        clearInterval(int)
    }
    int=setInterval(Displaytimer,10)
})
document.getElementById('stopBtn').addEventListener('click',()=>{
    clearInterval(int)
}) 
document.getElementById('resetBtn').addEventListener('click',()=>{
    clearInterval(int)
    DisplayTimer.innerHTML=`00:00:00:00`
}) 
function Displaytimer(){
    milliseconds++
    if(milliseconds==1000){
        milliseconds=0
        seconds++
        if(seconds==60){
            seconds=0
            minutes++
            if(minutes==60){
                minutes=0
                hours++
            }
        }
    }
    let h=hours<10?'0'+hours:hours
    let m=minutes<10?'0'+minutes:minutes
    let s=seconds<10?'0'+seconds:seconds
    let ms=milliseconds<10?'00'+milliseconds:milliseconds <100?'0'+milliseconds:milliseconds
    DisplayTimer.innerHTML=`${h}:${m}:${s}:${ms}`

}

