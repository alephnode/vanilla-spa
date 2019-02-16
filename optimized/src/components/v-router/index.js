import { html } from 'lit-html'
import { repeat } from 'lit-html/directives/repeat.js'
import Base from '../../base'
import '../v-link'
import '../v-logo'
import '../v-container'
import registerComponent from '../../common/register-component'
import routes from '../../common/routes'
import styles from './styles'

class VRouter extends Base {
  tpl() {
    return html`
      ${styles}
      <nav>
        <v-container type="space">
          <v-logo></v-logo>
          <v-container>
            ${repeat(
              routes,
              r => html`
                <span class="linkTxt"
                  ><v-link to=${r}>
                    ${r.split('v-')[1]}
                  </v-link>
                </span>
              `
            )}
          </v-container>
        </v-container>
      </nav>
    `
  }
}

registerComponent('v-router', VRouter)
