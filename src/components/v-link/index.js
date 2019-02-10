import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'

class VLink extends Base {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick({ target }) {
    this.dispatch('nav-changed', { route: target.parentNode.id })
  }

  tpl() {
    return html`
      <div id=${this.getAttribute('to' || 'home')} @click=${this.handleClick}>
        <slot></slot>
      </div>
    `
  }
}

registerComponent('v-link', VLink)
