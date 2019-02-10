export default (txt, className) => (() => {
    const register = () => customElements.define(txt, className)
    window.WebComponents ? window.WebComponents.waitFor(register) : register()
  })()
