import { html } from 'lit-html'
import Base from './base'
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
        <v-headline text="Back in business"></v-headline>
        <v-graph text="Even more content coming soon ..."></v-graph>
        <button @click=${this.handleClick}>do it</button>
      </div>
    `
  }
}

(() => {
  const register = () => customElements.define('v-app', VApp)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
