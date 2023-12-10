/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

//Function to halt the cpu for given milliseconds
function sleep (seconds) {
    const start=Date.now();
    while(Date.now() - start<=seconds){
        console.log("hello");
    }
}

console.log("start");
sleep(5000); //Halts the cpu for 5 seconds
console.log("end");