import { html } from 'lit-html'
import Base from './base'
import registerComponent from './common/register-component'
import './components/v-headline'
import './components/v-graph'
import './pages/page-one'
import './pages/page-two'

class VApp extends Base {
  handleClick(e) {
    e.preventDefault()
    console.log('herd dat')
  }

  _html() {
    return html`
      <div>
        <v-headline text="woot"></v-headline>
        <v-graph text="there it is"></v-graph>
        <v-page-one></v-page-one>
        <v-page-two></v-page-tw0>
      </div>
    `
  }
}

registerComponent('v-app', VApp)
