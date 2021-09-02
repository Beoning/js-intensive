let first = +prompt("Введите первое значение");
let second = +prompt("Введите второе значение");

if (!first || !second) {
  alert("Неверный ввод");
} else {
  alert(first.toString(second));
}
