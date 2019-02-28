import { html } from 'lit-html'
import Base from '../../base'
import '../v-container'
import registerComponent from '../../common/register-component'

class VImageContainer extends Base {
  tpl() {
    return html`
      <v-container type="ccc"
        ><img src=${this.getAttribute('src')} alt=${this.getAttribute('alt')}
      /></v-container>
    `
  }
}

registerComponent('v-img-container', VImageContainer)
