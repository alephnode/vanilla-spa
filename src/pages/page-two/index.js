import { html } from 'lit-html'
import Base from '../../base'

class VPageTwo extends Base {
  _html() {
    return html`
      <div>page two</div>
    `
  }
}

(() => {
  const register = () => customElements.define('v-page-two', VPageTwo)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
