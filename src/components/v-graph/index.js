import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'

class VGraph extends Base {
  tpl() {
    return html`
      <p><slot></slot></p>
    `
  }
}

registerComponent('v-graph', VGraph)
