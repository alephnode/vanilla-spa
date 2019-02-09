import Base from '../../base.js'
import styles from './styles.js'

class VGraph extends Base {
  html() {
    const tpl = txt => `
          ${styles}
          <p>
            ${txt}
          </p>
        `
    return tpl(this.getAttribute('text') || 'Sample Graph')
  }
}

;(() => {
  const register = () => customElements.define('v-graph', VGraph)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
