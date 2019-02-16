export default (txt, className) => {
  if (customElements.get(txt)) return
  const register = () => customElements.define(txt, className)
  window.WebComponents ? window.WebComponents.waitFor(register) : register()
}
