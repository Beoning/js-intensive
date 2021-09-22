class Car {
  #brand;
  #model;
  #yearOfManufacturing;
  #maxSpeed;
  #maxFuelVolume;
  #fuelConsumption;
  #currentFuelVolume = 0;
  #isStarted = false;
  #mileage = 0;

  get brand() {
    return this.#brand;
  }

  set brand(brandName) {
    if (
      typeof brandName !== 'string' ||
      brandName.length < 1 ||
      brandName.length > 50
    ) {
      throw new Error('Некорректное название');
    }
    this.#brand = brandName;
  }

  get model() {
    return this.#model;
  }

  set model(modelName) {
    if (
      typeof modelName !== 'string' ||
      modelName.length < 1 ||
      modelName.length > 50
    ) {
      throw new Error('Некорректное название');
    }
    this.#model = modelName;
  }

  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }

  set yearOfManufacturing(year) {
    if (
      typeof year !== 'number' ||
      isNaN(year) ||
      year < 1900 ||
      year > new Date().getFullYear()
    ) {
      throw new Error('Некорректный год производства');
    }
    this.#yearOfManufacturing = year;
  }

  get maxSpeed() {
    return this.#maxSpeed;
  }

  set maxSpeed(speed) {
    if (
      typeof speed !== 'number' ||
      isNaN(year) ||
      speed < 100 ||
      speed > 300
    ) {
      throw new Error('Некорректная скорость');
    }
    this.#maxSpeed = speed;
  }

  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }

  set maxFuelVolume(volumeNumber) {
    if (
      typeof volumeNumber !== 'number' ||
      isNaN(volumeNumber) ||
      volumeNumber < 5 ||
      volumeNumber > 20
    ) {
      throw new Error('Некорректное количество топлива');
    }
    this.#maxFuelVolume = volumeNumber;
  }

  get fuelConsumption() {
    return this.#fuelConsumption;
  }

  set fuelConsumption(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error('Введите корректное число');
    }
    this.#fuelConsumption = num;
  }

  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }

  get isStarted() {
    return this.#isStarted;
  }

  get mileage() {
    return this.#mileage;
  }

  start = () => {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }
    this.#isStarted = true;
  };

  shutDownEngine = () => {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }
    this.#isStarted = false;
  };

  fillUpGasTank = (fuelAmount) => {
    if (
      typeof fuelAmount !== 'number' ||
      isNaN(fuelAmount) ||
      !isFinite(fuelAmount) ||
      fuelAmount <= 0
    ) {
      throw new Error('Неверное количество топлива для заправки');
    }
    if (this.#currentFuelVolume + fuelAmount > this.#maxFuelVolume) {
      throw new Error('Топливный бак переполнен');
    }
    this.#currentFuelVolume += fuelAmount;
  };

  drive = (speed, hours) => {
    if (typeof speed !== 'number' || isNaN(speed) || speed <= 0) {
      throw new Error('Неверная скорость');
    }

    if (
      typeof hours !== 'number' ||
      isNaN(hours) ||
      !isFinite(hours) ||
      hours <= 0
    ) {
      throw new Error('Неверное количество часов');
    }

    if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    }

    if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    }

    let fullDistance = speed * hours;
    let necessaryFuel = (fullDistance / 100) * this.#fuelConsumption;

    if (necessaryFuel > this.#currentFuelVolume) {
      throw new Error('Недостаточно топлива');
    }

    this.#currentFuelVolume -= necessaryFuel;
    this.#mileage = fullDistance;
  };
}

module.exports = Car;
