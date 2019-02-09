class Base extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
    this._render()
    this.onMount()
  }

  disconnectedCallback() {
    this.onUnmount()
  }

  _render() {
    const template = document.createElement('template')
    template.innerHTML = this.html()
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  /*abstract*/ onMount() {}
  /*abstract*/ onUnmount() {}
  /*abstract*/ html() {}
}

export default Base
