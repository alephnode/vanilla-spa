import { html } from 'lit-html'
import Base from '../../base'
import '../../components/v-headline'
import '../../components/v-graph'
import registerComponent from '../../common/register-component'

class VPageTwo extends Base {
  tpl() {
    return html`
      <v-headline>Page Two</v-headline>
      <v-graph>Welcome to the page</v-graph>
    `
  }
}

registerComponent('v-page-two', VPageTwo)
