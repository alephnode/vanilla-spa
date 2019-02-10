import { render } from 'lit-html'

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
    render(this._html(), this.shadowRoot)
  }

  /*abstract*/ onMount() {}
  /*abstract*/ onUnmount() {}
  /*abstract*/ _html() {}
}

export default Base
