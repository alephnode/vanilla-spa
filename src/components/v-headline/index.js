import { html } from 'lit-html'
import Base from '../../base'

class VHeadline extends Base {
  _html() {
    const graphTpl = txt => html`
      <h1>${txt}</h1>
    `
    return html`
      ${graphTpl(this.getAttribute('text'))}
    `
  }
}

(() => {
  const register = () => customElements.define('v-headline', VHeadline)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
