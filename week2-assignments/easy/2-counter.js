function clock() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  setTimeout(clock, 1000);
}

clock();
