class SeatSelector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
         *:focus {
           outline: none;
        }

        .counter-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .increase-button, .decrease-button {
            background-color: #ffeb3b;
            color: black;
            border: none;
            border-radius: 5px;
            padding: 10px;
            height: 50px;
            width: 50px;
            cursor: pointer;
        }

        .reserve-button {
            background-color: #ffeb3b;
            color: black;
            border: none;
            border-radius: 5px;
            padding: 10px;
            height: 50px;
            width: 150px;
        }

        .reserve-button:disabled {
            background-color: #ccc;
            color: #888;
            cursor: not-allowed;
        }
          
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          margin: 0; 
        }

        .count-input {
            width: 80px;
            height: 50px;
            text-align: center;
            font-size: 1.5em;
            border: none;
            border-radius: 5px;
        }
    `;
    this.shadowRoot.appendChild(style);
    this.count = 0;

    const container = document.createElement("div");
    container.classList.add("counter-container");

    this.decreaseButton = document.createElement("button");
    this.decreaseButton.textContent = "➖";
    this.decreaseButton.classList.add("increase-button");

    this.increaseButton = document.createElement("button");
    this.increaseButton.textContent = "➕";
    this.increaseButton.classList.add("decrease-button");

    this.countInput = document.createElement("input");
    this.countInput.type = "number";
    this.countInput.value = this.count;
    this.countInput.classList.add("count-input");

    this.reserveButton = document.createElement("button");
    this.reserveButton.textContent = "Reservar";
    this.reserveButton.classList.add("reserve-button");
    this.reserveButton.disabled = true;

    container.appendChild(this.decreaseButton);
    container.appendChild(this.countInput);
    container.appendChild(this.increaseButton);
    container.appendChild(this.reserveButton);
    this.shadowRoot.append(container);

    this.increaseButton.addEventListener("click", () => this.increment());
    this.decreaseButton.addEventListener("click", () => this.decrement());
    this.countInput.addEventListener("input", () =>
      this.updateCountFromInput()
    );
    this.reserveButton.addEventListener("click", () => this.reserveSeats());
  }

  increment() {
    this.count++;
    this.updateDisplay();
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
      this.updateDisplay();
    }
  }

  updateCountFromInput() {

    this.count = parseInt(this.countInput.value) || 0;
    this.updateDisplay();
  }

  updateDisplay() {
    this.countInput.value = this.count;
    this.updateButtonStates();
  }

  updateButtonStates() {
    if (this.count <= 0) {
      this.reserveButton.disabled = true;
    } else {
      this.reserveButton.disabled = false;
    }
  }

  reserveSeats() {
    if (this.count > 0) {
      const event = new CustomEvent("seats-reserved", {
        detail: { count: this.count },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(event);
      this.count = 0;
      this.updateDisplay();
    }
  }
}

customElements.define("seat-selector", SeatSelector);
