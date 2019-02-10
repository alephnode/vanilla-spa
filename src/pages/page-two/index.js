import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'

class VPageTwo extends Base {
  tpl() {
    return html`
      <div>page two</div>
    `
  }
}

registerComponent('v-page-two', VPageTwo)
