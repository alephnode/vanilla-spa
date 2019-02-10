import { html } from 'lit-html'
import Base from '../../base'

class VGraph extends Base {
  _html() {
    const graphTpl = txt => html`
      <p>${txt}</p>
    `
    return html`
      ${graphTpl(this.getAttribute('text'))}
    `
  }
}

(() => {
  const register = () => customElements.define('v-graph', VGraph)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
