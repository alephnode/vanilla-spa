import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'

class VImageContainer extends Base {
  tpl() {
    return html`
      <div><img src=${this.getAttribute('src')} /></div>
    `
  }
}

registerComponent('v-img-container', VImageContainer)
