import { html } from 'lit-html'
import Base from './base.js'
import './components/v-headline/index.js'
import './components/v-graph/index.js'
import './pages/page-one/index.js'
import './pages/page-two/index.js'

class VApp extends Base {
  _html() {
    return html`
      <div>
        <v-graph text="Even more content coming soon ..."></v-graph>
      </div>
    `
  }
}

(() => {
  const register = () => customElements.define('v-app', VApp)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
