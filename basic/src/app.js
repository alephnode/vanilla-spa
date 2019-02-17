import { html } from '/node_modules/lit-html/lit-html.js'
import { unsafeHTML } from '/node_modules/lit-html/directives/unsafe-html.js'
import Base from './base/index.js'
import registerComponent from './common/register-component/index.js'
import routes from './common/routes/index.js'
import './components/v-router/index.js'
import './pages/page-one/index.js'
import './pages/page-two/index.js'

class VApp extends Base {
  constructor() {
    super()
    this.navigate = this.navigate.bind(this)
  }

  onMount() {
    let page = location.pathname.substr(1)
    this.setActivePage((page && this.isRegistered(page)) || 'v-page-one')
    this.shadowRoot
      .querySelector('#root')
      .addEventListener('nav-changed', ({ detail: { route } }) => this.navigate(route)
      )
  }

  navigate(route) {
    this.setActivePage(route)
  }

  setActivePage(page) {
    if (!page) return
    const pageTag = `<${page}></${page}>`
    this.htmlToRender = html`
      ${unsafeHTML(pageTag)}
    `
    history.pushState({}, page, page.split('v-')[1])
    this.updateTpl()
  }

  isRegistered(page) {
    return routes.indexOf(`v-${page}`) > -1 ? `v-${page}` : false
  }

  tpl() {
    return this.htmlToRender
      ? html`
          <style>
            #root {
              max-width: 1200px;
              margin: 0 auto;
            }
          </style>
          <div id="root">
            <v-router></v-router>
            ${this.htmlToRender}
          </div>
        `
      : ``
  }
}

registerComponent('v-app', VApp)