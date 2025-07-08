const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn1");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = this.textContent;
    if (value === "C") {
      //   display.value = "";
      // Xoá 1 ký tự cuối cùng thay vì xoá toàn bộ
      display.value = display.value.slice(0, -1);
    } else {
      display.value += value;
    }
  });
});

const btnEqual = document.getElementById("btnEqual");

btnEqual.addEventListener("click", function () {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
});
