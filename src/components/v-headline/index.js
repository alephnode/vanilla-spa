import Base from '../../base.js'
import styles from './styles.js'

class VHeadline extends Base {
  _html() {
    const tpl = txt => `
          ${styles}
          <h1>
            ${txt}
          </h1>
        `
    return tpl(this.getAttribute('text') || 'Sample Headline')
  }
}

(() => {
  const register = () => customElements.define('v-headline', VHeadline)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
