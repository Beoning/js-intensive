let first = Number(prompt("Введите первое значение"));
let second;

if (!first) {
  alert("Некорректный ввод!");
} else {
  second = Number(prompt("Введите второе значение"));
  if (!second) {
    alert("Некорректный ввод!");
  } else {
    alert(`Ответ: ${first + second}, ${first / second}`);
  }
}
