function sayHello() {
    return () => {
        console.log("Jai Shree Ram");
    }
}

let guessValue = sayHello();

console.log(guessValue);
guessValue();