import { html } from '/node_modules/lit-html/lit-html.js'
import Base from '../../base/index.js'
import styles from './styles.js'
import registerComponent from '../../common/register-component/index.js'

class VContainer extends Base {
  tpl() {
    return html`
      ${styles}
      <div class=${this.getAttribute('type') || 'base'}><slot></slot></div>
    `
  }
}

registerComponent('v-container', VContainer)
