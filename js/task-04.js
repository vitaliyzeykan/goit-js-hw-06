const counterValue = function ({ initialValue = 0, step = 1 } = {}) {
    this._value = initialValue;
    this._step = step;
    this._bindIvents();
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

counterValue.prototype._bindIvents = function () {
    decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.valueUI();
    });
    incrementBtn.addEventListener('click', () => {
        this.increment();
        this.valueUI();
    });
};

counterValue.prototype.valueUI = function () {
    value.textContent = this._value;
};

counterValue.prototype.decrement = function () {
    this._value -= this._step;
};

counterValue.prototype.increment = function () {
    this._value += this._step;
};
new counterValue();
