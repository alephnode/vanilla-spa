import { html } from 'lit-html'
import Base from '../../base'
import '../v-link'
import registerComponent from '../../common/register-component'

class VRouter extends Base {
  tpl() {
    return html`
      <nav>
        <v-link to="v-page-one">page one</v-link>
        <v-link to="v-page-two">page two</v-link>
      </nav>
    `
  }
}

registerComponent('v-router', VRouter)
