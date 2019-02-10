import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'

class VHeadline extends Base {
  tpl() {
    return html`
      <h1><slot></slot></h1>
    `
  }
}

registerComponent('v-headline', VHeadline)
