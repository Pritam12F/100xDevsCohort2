setInterval(()=>{
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let twelve_hours=
    console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);