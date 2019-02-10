import { html } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'
import Base from './base'
import registerComponent from './common/register-component'
import './components/v-headline'
import './components/v-graph'
import './pages/page-one'
import './pages/page-two'

class VApp extends Base {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  onMount() {
    this.toggleActivePage()
  }

  toggleActivePage() {
    let newPage = this.activePage === 'v-page-one' ? 'v-page-two' : 'v-page-one'
    this.activePage = newPage
    const pageTag = `<${this.activePage}></${this.activePage}>`
    this._htmlToRender = html`
      ${unsafeHTML(pageTag)}
    `
    this._render()
  }

  handleClick(e) {
    e.preventDefault()
    this.toggleActivePage()
    this._render()
  }

  tpl() {
    return this._htmlToRender
      ? html`
          <div>
            <v-headline text="woot"></v-headline>
            <v-graph text="there it is"></v-graph>
            ${this._htmlToRender}
            <button @click=${this.handleClick}>turn the page</button>
          </div>
        `
      : ``
  }
}

registerComponent('v-app', VApp)
