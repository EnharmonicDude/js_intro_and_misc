//LOOP 1

const output = document.querySelector('.output');//select the .output div class
output.textContent = "";

let i = 10; //start at 10

while (i >= 0) { //if it is above 0, count down
  const para = document.createElement('p'); //by selecting the div in the document
  if (i === 10) {//if it is ten, print this
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {//if it is 0, print this
    para.textContent = 'Blast off!';
  } else {//otherwise just count down
    para.textContent = i;
  }

  output.appendChild(para);//put the paragraph out

  i--;
}


//LOOP 2
let num;//no value attached because the value is determined by user input

do {
  num = prompt("Enter a number greater than 100?", 0);//prompt for a number (Default = 0)
} while (num <= 100 && num);//as long as num is smaller or same as 100 OR falsy
//because if the user enters nothing, the condition for num is falsy, since there is null value!

//LOOP 3 - Prime numbers between 2 and 10;

let n = 10;

nextPrime://name of my loop
for (let i = 2; i <= n; i++){//so for every number between 2 and 10
    
    for (let j = 2; j < i; j++){//take a number as divisor that is BELOW i, so since both i and j start at 2, j is effectively (i - 1)
        if (i % j == 0) continue nextPrime;//look for the next prime, because that means that i is dividable by another number (since j is below n);
    }

    alert (i);//alert me of the prime number
}


