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

  updateTpl() {
    this._render()
  }

  disconnectedCallback() {
    this.onUnmount()
  }

  dispatch(event, detail) {
    this.dispatchEvent(
      new CustomEvent(event, { detail, bubbles: true, composed: true })
    )
  }

  getChild(qry) {
    return this.shadowRoot.querySelector(qry)
  }

  getChildren(qry) {
    return this.shadowRoot.querySelectorAll(qry)
  }

  _render() {
    render(this.tpl(), this.shadowRoot)
  }

  /*abstract*/ onMount() {}
  /*abstract*/ onUnmount() {}
  /*abstract*/ tpl() {}
}

export default Base
