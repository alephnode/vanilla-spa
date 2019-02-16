import { html } from '/node_modules/lit-html/lit-html.js'
import Base from '../../base/index.js'
import registerComponent from '../../common/register-component/index.js'
import styles from './styles.js'

class VGraph extends Base {
  tpl() {
    return html`
      ${styles}
      <p><slot></slot></p>
    `
  }
}

registerComponent('v-graph', VGraph)
