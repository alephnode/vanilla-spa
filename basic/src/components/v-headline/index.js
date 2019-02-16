import { html } from '/node_modules/lit-html/lit-html.js'
import Base from '../../base/index.js'
import registerComponent from '../../common/register-component/index.js'
import styles from './styles.js'

class VHeadline extends Base {
  tpl() {
    return html`
      ${styles}
      <h1><slot></slot></h1>
    `
  }
}

registerComponent('v-headline', VHeadline)
