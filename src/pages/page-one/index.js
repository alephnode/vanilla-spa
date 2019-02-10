import Base from '../../base.js'

class VPageOne extends Base {
  _html() {
    const tpl = `<div>page one!</div>`
    return tpl
  }
}

(() => {
  const register = () => customElements.define('v-page-one', VPageOne)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
})()
