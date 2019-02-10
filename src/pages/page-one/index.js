import { html } from 'lit-html'
import Base from '../../base'
import '../../components/v-headline'
import '../../components/v-graph'
import registerComponent from '../../common/register-component'

class VPageOne extends Base {
  tpl() {
    return html`
      <v-headline>Page One</v-headline>
      <v-graph>this is the best page</v-graph>
    `
  }
}

registerComponent('v-page-one', VPageOne)
