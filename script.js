function makeObjectDeepCopy(obj) {
  let objCopy = { ...obj };
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      objCopy[key] = makeObjectDeepCopy(obj[key]);
    }
  }

  return objCopy;
}

function selectFromInterval(arr, firstValue, secondValue) {
  if (!Array.isArray(arr) || !arr.every((item) => typeof item === "number")) {
    throw new Error("Ошибка");
  }

  if (isNaN(firstValue) || isNaN(secondValue)) {
    throw new Error("Ошибка");
  }

  if (firstValue > secondValue) {
    return arr.filter((item) => item >= secondValue && item <= firstValue);
  }

  if (secondValue > firstValue) {
    return arr.filter((item) => item <= secondValue && item >= firstValue);
  }
}

const myIterable = {
  from: 1,
  to: 4,
  [Symbol.iterator]: function () {
    if (
      !this.hasOwnProperty("from") ||
      !this.hasOwnProperty("to") ||
      typeof this.from !== "number" ||
      typeof this.to !== "number" ||
      this.to < this.from
    ) {
      throw new Error("Ошибка");
    } else {
      return {
        start: this.from,
        end: this.to,
        next() {
          if (this.start <= this.end) {
            return {
              done: false,
              value: this.start++,
            };
          } else {
            return {
              done: true,
            };
          }
        },
      };
    }
  },
};
