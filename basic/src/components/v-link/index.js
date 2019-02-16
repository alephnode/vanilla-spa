import { html } from '/node_modules/lit-html/lit-html.js'
import Base from '../../base/index.js'
import registerComponent from '../../common/register-component/index.js'
import styles from './styles.js'

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
      ${styles}
      <div
        class="link"
        id=${this.getAttribute('to' || 'home')}
        @click=${this.handleClick}
      >
        <slot></slot>
      </div>
    `
  }
}

registerComponent('v-link', VLink)
