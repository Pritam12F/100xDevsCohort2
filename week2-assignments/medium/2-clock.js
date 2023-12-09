setInterval(()=>{
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let zone;
    let actualHours;
    if(hours>=0 && hours<=11)
        zone='AM';
    else
        zone='PM';
    if(hours==12)
        actualHours=12;
    else
        actualHours=hours%12;
    console.log(`${hours}:${minutes}:${seconds}`);
    console.log(`${actualHours}:${minutes}:${seconds} `+zone);
}, 1000);