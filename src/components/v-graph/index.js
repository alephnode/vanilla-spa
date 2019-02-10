import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'

class VGraph extends Base {
  tpl() {
    const graphTpl = txt => html`
      <p>${txt}</p>
    `
    return html`
      ${graphTpl(this.getAttribute('text'))}
    `
  }
}

registerComponent('v-graph', VGraph)
