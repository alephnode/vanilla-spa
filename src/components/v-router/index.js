import { html } from 'lit-html'
import { repeat } from 'lit-html/directives/repeat.js'
import Base from '../../base'
import '../v-link'
import registerComponent from '../../common/register-component'
import routes from '../../common/routes'

class VRouter extends Base {
  tpl() {
    return html`
      <nav>
        ${repeat(
          routes,
          r => html`
            <v-link to=${r}>${r.split('v-')[1]}</v-link>
          `
        )}
      </nav>
    `
  }
}

registerComponent('v-router', VRouter)
