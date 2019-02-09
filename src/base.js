export default (tn, tpl) => {
  const template = document.createElement('template')
  template.innerHTML = tpl

  const register = () =>
    customElements.define(
      tn,
      class extends HTMLElement {
        connectedCallback() {
          if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' })
            this.shadowRoot.appendChild(template.content.cloneNode(true))
          }
        }
      }
    )
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
}
