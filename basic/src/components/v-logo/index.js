import { html } from '/node_modules/lit-html/lit-html.js'
import Base from '../../base/index.js'
import '../v-link/index.js'
import '../v-headline/index.js'
import registerComponent from '../../common/register-component/index.js'

class VLogo extends Base {
  tpl() {
    return html`
      <div>
        <v-headline>
          <v-link to="v-page-one">Performance Zone</v-link>
        </v-headline>
      </div>
    `
  }
}

registerComponent('v-logo', VLogo)
