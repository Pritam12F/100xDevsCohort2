function clock(){
    const date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
    setTimeout(clock, 1000);
}
clock();
