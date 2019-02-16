import { html } from 'lit-html'
import Base from '../../base'
import registerComponent from '../../common/register-component'
import styles from './styles'

class VGraph extends Base {
  tpl() {
    return html`
      ${styles}
      <p><slot></slot></p>
    `
  }
}

registerComponent('v-graph', VGraph)
