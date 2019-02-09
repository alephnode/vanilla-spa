import headline from './tpl.js'
;(() => {
  const template = document.createElement('template')
  template.innerHTML = headline('Hello world!')

  class Headline extends HTMLElement {
    constructor() {
      super()

      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }

  const register = () => customElements.define('v-headline', Headline)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
