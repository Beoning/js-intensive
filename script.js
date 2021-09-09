Array.prototype.myFilter = function (callback, thisArg) {
  let result = [];
  this.forEach((item, i, arr) => {
    if (callback.call(thisArg, item, i, arr)) {
      result = [...result, item];
    }
  });

  return result;
};

function createDebounceFunction(callback, delay) {
  let timeout;

  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(this, arguments), delay);
  };
}
