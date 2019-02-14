import { html } from 'lit-html'
import Base from '../../base'
import '../v-link'
import '../v-headline'
import registerComponent from '../../common/register-component'

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
