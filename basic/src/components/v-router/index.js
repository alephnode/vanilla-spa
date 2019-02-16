import { html } from '/node_modules/lit-html/lit-html.js'
import { repeat } from '/node_modules/lit-html/directives/repeat.js'
import Base from '../../base/index.js'
import '../v-link/index.js'
import '../v-logo/index.js'
import '../v-container/index.js'
import registerComponent from '../../common/register-component/index.js'
import routes from '../../common/routes/index.js'
import styles from './styles.js'

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
