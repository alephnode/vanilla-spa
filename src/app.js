import { html } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import Base from './base'
import registerComponent from './common/register-component'
import './components/v-router'
import './components/v-headline'
import './components/v-graph'
import './pages/page-one'
import './pages/page-two'

class VApp extends Base {
  constructor() {
    super()
    this.navigate = this.navigate.bind(this)
  }

  onMount() {
    this.setActivePage('v-page-one')
    this.getChild('v-router').addEventListener(
      'nav-changed',
      ({ detail: { route } }) => this.navigate(route)
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
    this._render()
  }

  tpl() {
    return this.htmlToRender
      ? html`
          <div>
            <v-headline text="woot"></v-headline>
            <v-router></v-router>
            <v-graph text="there it is"></v-graph>
            ${this.htmlToRender}
          </div>
        `
      : ``
  }
}

registerComponent('v-app', VApp)
