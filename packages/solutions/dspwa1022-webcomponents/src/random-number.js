class RandomNumber extends HTMLElement {
  /**
   * @type {ShadowRoot}
   */
  shadow;

  connectedCallback() {
    this.setup();
  }

  setup() {
    const span = document.createElement("span");
    span.textContent = this.randomNumber;

    if (this.useShadowDom) {
      this.shadow = this.attachShadow({ mode: "open" });
      this.shadow.appendChild(span);
    } else {
      this.appendChild(span);
    }
  }

  get useShadowDom() {
    return this.getAttribute("use-shadow-dom") === "true";
  }

  get randomNumber() {
    const min = parseInt(this.getAttribute("min") ?? 0, 10);
    const max = parseInt(this.getAttribute("max") ?? 100, 10);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

window.customElements.define("dspwa1022-random-number", RandomNumber);
