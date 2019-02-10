import { html } from 'lit-html'
import Base from '../../base'

class VPageOne extends Base {
  _html() {
    return html`
      <div>page one!</div>
    `
  }
}

(() => {
  const register = () => customElements.define('v-page-one', VPageOne)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
