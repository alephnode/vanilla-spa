import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'

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

registerComponent('v-headline', VHeadline)
