import Base from './base.js'
import './components/v-headline/index.js'
import './components/v-graph/index.js'

class VApp extends Base {
  html() {
    const tpl = `
          <div>
            <v-headline text="Welcome to the new vanilla site!"></v-headline>
            <v-graph text="Even more content coming soon ..."></v-graph>
          </div>
        `
    return tpl
  }
}

;(() => {
  const register = () => customElements.define('v-app', VApp)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
