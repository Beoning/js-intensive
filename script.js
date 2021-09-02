let first = Number(prompt("Введите первое значение"));
let second = Number(prompt("Введите второе значение"));

if (!first || !second) {
  alert("Неверный ввод");
} else {
  let newNumber = first.toString(second);
  alert(newNumber);
}
