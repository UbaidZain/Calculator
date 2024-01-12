let buttons = Array.from(document.querySelectorAll(".button"));
let display = document.getElementById("display");
console.log(buttons);
buttons(
  document.addEventListener("click", (e) => {
    let result = "";
    result = e.target.innerText;
    switch (result) {
      case "AC":
        display.innerText = "";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (err) {
          display.innerText = "Syntax Error";
        }

        break;
      default:
        display.innerText += result;
        break;
    }
  })
);
