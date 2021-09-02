let first = +prompt("Введите первое значение") || alert("Некорректный ввод!");
let second;

if (first) {
  second = +prompt("Введите второе значение") || alert("Некорректный ввод!");
}

if (second) {
  alert(`Ответ: ${first + second}, ${first / second}`);
}
