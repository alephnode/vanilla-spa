import { html } from 'lit-html'
import Base from '../../base'
import '../../components/v-graph'
import '../../components/v-container'
import styles from './styles'
import registerComponent from '../../common/register-component'

class VPageOne extends Base {
  tpl() {
    return html`
      ${styles}
      <v-container>
        <v-graph>this is the best page</v-graph>
      </v-container>
    `
  }
}

registerComponent('v-page-one', VPageOne)
