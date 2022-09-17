// Set the date we're counting down to
const exp = new Date("9/17/2022 12:30:00").getTime();

randColor = () => `rgba(${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 200)},1.0)`

function printArr(str, el, wait) {
  
  const arr = str.split("");
  let i = 0;
   
  const interval = setInterval(() => {
    const letter = document.createElement("span");
    letter.setAttribute("style", `color: ${randColor()};`)
    letter.classList.add(`hidden${i}`);
    letter.innerText = arr[i];
    
    document.querySelector(el).appendChild(letter);
    i++;

    if(i === arr.length) {
      clearInterval(interval);
    }
  }, wait);
}

const countdown = setInterval(function() {

  const now = new Date().getTime();

  const delay = exp - now;

  const days = Math.floor(delay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((delay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((delay % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((delay % (1000 * 60)) / 1000);

  document.querySelector(".countdown").innerHTML = `${hours}t ${minutes}m ${seconds}s`;

  if (delay < 0) {
    
    clearInterval(countdown);
    
    document.querySelector(".countdown-container").setAttribute("style", "display: none;");
    
    printArr("Stort Grattis", ".span-one", 500);
    
    setTimeout(() => {
      printArr("på", ".span-two", 500);
      setTimeout(() => {
        printArr("70-års dagen", ".span-three", 500);
        setTimeout(() => {
         document.querySelector(".span-one").innerHTML = ""     
         document.querySelector(".span-two").innerHTML = ""     
         document.querySelector(".span-three").innerHTML = ""
         
         setTimeout(() => {
          printArr("För att du ska få fason på den här...", ".span-one", 500)
          setTimeout(() => {
            document.querySelector(".span-one").innerHTML = ""
            let i = 5;
            const interval = setInterval(() => {
              document.querySelector(".span-one").innerText = `Detonation in ${i} seconds.`
              if(i === 0) {
                document.querySelector(".span-one").innerHTML = ""
                clearInterval(interval)
                document.querySelector(".morris").setAttribute("src", "./morris.jpg")
                setTimeout(() => {
                  document.querySelector(".morris").setAttribute("src", "")
                  printArr("Har vi bestämt att du i egenskap av älskad far, morfar och svärfar ska få en hundkurs!! :)", ".span-one", 500)
                }, 5000)
              }
              i--;
            },1000)
          }, 20000) 
        }, 500)
        },8000)
      }, 2000)
    }, 7000)
  }
},1000)
