// Set the date we're counting down to

const _qa = q => document.querySelectorAll(q);
const _q = q => document.querySelector(q);

function randColor() {
  return `
    rgba(
      ${Math.floor(Math.random() * 200)},
      ${Math.floor(Math.random() * 200)},
      ${Math.floor(Math.random() * 200)},
      1.0)
  `;
} 

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

function clearElements(identifier) {
  
  const nodes = _qa(identifier);
  
  for(let node of nodes) {
    node.innerHTML = "";
  }
}

function updateCountdown(expStr) {
  const exp = new Date(expStr).getTime();
  const now = new Date().getTime();
  const timeLeft = exp - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return exp > 0 ? `${hours}t ${hours}t ${minutes}m ${seconds}s` : false;
}

const countdown = setInterval(function() {

  const timeLeft = updateCountdown("9/17/2022 12:30:00");
  _q(".countdown").innerHTML = timeLeft;

  if (timeLeft) {
    
    clearInterval(countdown);
    
    document.querySelector(".countdown-container").setAttribute("style", "display: none;");
    
    printArr("Stort Grattis", ".span-one", 500);
    
    setTimeout(() => {
      printArr("på", ".span-two", 500);
      setTimeout(() => {
        printArr("70-års dagen", ".span-three", 500);
        setTimeout(() => {
          clearElements('[class*="span"]'); 
          
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