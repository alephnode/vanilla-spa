import { html } from 'lit-html'
import Base from '../../base'
import styles from './styles'
import registerComponent from '../../common/register-component'

class VContainer extends Base {
  tpl() {
    return html`
      ${styles}
      <div class=${this.getAttribute('type') || 'base'}><slot></slot></div>
    `
  }
}

registerComponent('v-container', VContainer)
