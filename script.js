function concatStrings(word, separator) {
  return (next) => {
    if (typeof next !== "string") {
      return word;
    }

    if (typeof separator !== "string") {
      const newString = word + next;
      return concatStrings(newString);
    }

    const newString = word + separator + next;
    return concatStrings(newString, separator);
  };
}

class Calculator {
  constructor(x, y) {
    if (
      typeof x !== "number" ||
      typeof y !== "number" ||
      !isFinite(x) ||
      !isFinite(y) ||
      isNaN(x) ||
      isNaN(y)
    ) {
      throw new Error("Ошибка");
    }
    this.x = x;
    this.y = y;
  }

  setX = (num) => {
    if (typeof num !== "number" || !isFinite(num) || isNaN(num)) {
      throw new Error("Ошибка");
    }
    this.x = num;
  };

  setY = (num) => {
    if (typeof num !== "number" || !isFinite(num) || isNaN(num)) {
      throw new Error("Ошибка");
    }
    this.y = num;
  };

  logSum = () => {
    console.log(this.x + this.y);
  };

  logMul = () => {
    console.log(this.x * this.y);
  };

  logSub = () => {
    console.log(this.x - this.y);
  };

  logDiv = () => {
    if (this.y === 0) {
      throw new Error("Ошибка!");
    }
    console.log(this.x / this.y);
  };
}
