const display = document.querySelector("#display");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (value === "=") {
      display.value = eval(display.value);
    } else if (value === "C") {
      display.value = "";
    } else if (value === "√") {
      const currentValue = parseFloat(display.value);
      if (!isNaN(currentValue) && currentValue >= 0) {
        display.value = Math.sqrt(currentValue);
      }
    } else {
      display.value += value;
    }
  });
});
