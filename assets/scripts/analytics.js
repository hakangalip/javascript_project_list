const stopAnalytics = setInterval(()=>{
    console.log("sending analytics");
}, 3000)

document.getElementById('stop-analytics-button')
.addEventListener('click', ()=>{
    clearTimeout(stopAnalytics);
})