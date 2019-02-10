import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'

class VPageOne extends Base {
  _html() {
    return html`
      <div>page one!</div>
    `
  }
}

registerComponent('v-page-one', VPageOne)
