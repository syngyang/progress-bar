const circle = document.querySelector(".progress-circle")

const loading = document.querySelector('.loading-text')

let i = 0 ;
const fakeUploadPerc = [0,10,25,40,42,60,70,75,90,100]

const circumference = circle.getTotalLength();

const interval = setInterval(()=>{
    circle.style.strokeDashoffset = circumference - (fakeUploadPerc[i] /100) * circumference;
    loading.innerHTML = `${fakeUploadPerc[i]} %`
    i++
    if(i === fakeUploadPerc.length){
        clearInterval(interval);
        loading.innerHTML= "ok";
    }
},1000)
