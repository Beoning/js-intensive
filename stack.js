class StackElem {
  constructor(value) {
    this.value = value;
    this.previous = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (!Number.isInteger(maxSize)) {
      throw new Error("Ошибка");
    }
    this.maxSize = maxSize;
    this.currentSize = 0;
    this.topElem = null;
  }

  isEmpty = () => {
    return this.currentSize === 0;
  };

  push = (elem) => {
    if (this.currentSize >= this.maxSize) {
      throw new Error("Ошибка");
    }

    let prevTop = this.topElem;
    this.topElem = new StackElem(elem);
    this.topElem.previous = prevTop;
    this.currentSize += 1;

    return this.currentSize - 1;
  };

  pop = () => {
    if (this.isEmpty()) {
      throw new Error("Ошибка");
    }

    let prevTop = this.topElem;
    this.topElem = prevTop.previous;
    this.currentSize -= 1;
    return prevTop.value;
  };

  peek = () => {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.topElem.value;
    }
  };

  toArray = () => {
    let arr = [];

    if (this.isEmpty()) {
      return arr;
    }

    let element = this.topElem;
    while (element) {
      arr.push(element.value);
      element = element.previous;
    }

    return arr;
  };

  static fromIterable = (iterable) => {
    if (!iterable[Symbol.iterator]) {
      throw new Error("Ошибка");
    }

    let stack = new Stack(iterable.length);

    for (let item of iterable) {
      stack.push(item);
    }

    return stack;
  };
}

module.exports = { Stack };
