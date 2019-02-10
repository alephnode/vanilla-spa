import Base from '../../base.js'

class VPageTwo extends Base {
  _html() {
    const tpl = `<div>page two</div>`
    return tpl
  }
}

(() => {
  const register = () => customElements.define('v-page-two', VPageTwo)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
