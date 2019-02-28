import { html } from '/node_modules/lit-html/lit-html.js'
import Base from '../../base/index.js'
import '../v-container/index.js'
import registerComponent from '../../common/register-component/index.js'

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
