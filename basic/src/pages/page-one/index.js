import { html } from '/node_modules/lit-html/lit-html.js'
import Base from '../../base/index.js'
import '../../components/v-graph/index.js'
import '../../components/v-container/index.js'
import styles from './styles.js'
import registerComponent from '../../common/register-component/index.js'

class VPageOne extends Base {
  tpl() {
    return html`
      ${styles}
      <v-container>
        <v-graph>Intro to the performance test.</v-graph>
      </v-container>
    `
  }
}

registerComponent('v-page-one', VPageOne)
