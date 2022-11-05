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

  if(timeLeft) {
    
    clearInterval(countdown);
    
    _q(".countdown-container").setAttribute("style", "display: none;");
    const str = "Stort Grattis";
    let timeout = str.length * 100 + 1000;
    printArr(str, ".span-one", 100);
    
    setTimeout(() => {
      let str = "på";
      let timeout = str.length * 100 + 1000;
      printArr(str, ".span-two", 100);
      
      setTimeout(() => {
        let str = "70-års dagen";
        let timeout = str.length * 100 + 1000;
        printArr(str, ".span-three", 100);
        
        setTimeout(() => {
          clearElements('[class*="span"]'); 
          
          setTimeout(() => {
            let str = "För att du ska få fason på den här...";
            let timeout = str.length * 100 + 1000;
          
            printArr(str, ".span-one", 100)
          
          setTimeout(() => {
            document.querySelector(".span-one").innerHTML = ""
            let i = 5;
            
            const interval = setInterval(() => {
              document.querySelector(".span-one").innerText = `Detonation in ${i} seconds.`
              
              if(i === 0) {
                document.querySelector(".span-one").innerHTML = ""
                document.querySelector(".morris").setAttribute("src", "./morris.jpg")
                
                clearInterval(interval)
                
                setTimeout(() => {
                  document.querySelector(".morris").setAttribute("src", "")
                  let str = "Har vi bestämt att du i egenskap av älskad far, morfar och svärfar ska få en hundkurs!! :)";
                  let timeout = str.length * 100 + 1000;
                  printArr(str, ".span-one", 100);
                
                  setTimeout(() => {
                    const letters = _qa('[class*="hidden"]');
                    let i = 0;

                    const clearPage = setInterval(() => {
                      letters[i].classList.add("leave");
                      
                      //setTimeout(() => {
                      //  letters[i].setAttribute("style", "opacity: 0;");
                      //}, 100)
                      
                      if(i === letters.length - 1) {
                        clearInterval(clearPage);
                      }
                      i++;
                    }, 100);

                  }, timeout)
                }, 2000)
              }
              i--;
            },1000)
          }, timeout) 
        }, 250)
        },timeout)
      }, timeout)
    }, timeout)
  }
},1000)