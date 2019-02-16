import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'
import styles from './styles'

class VHeadline extends Base {
  tpl() {
    return html`
      ${styles}
      <h1><slot></slot></h1>
    `
  }
}

registerComponent('v-headline', VHeadline)
