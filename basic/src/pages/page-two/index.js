import { html } from '/node_modules/lit-html/lit-html.js'
import Base from '../../base/index.js'
import '../../components/v-graph/index.js'
import '../../components/v-img-container/index.js'
import registerComponent from '../../common/register-component/index.js'

class VPageTwo extends Base {
  tpl() {
    return html`
      <v-graph>Images of interest</v-graph>
      <v-img-container
        alt="Black and white example photo"
        src="https://www.apogeephoto.com/wp-content/uploads/2016/july2014/Sanders_photos/black-white.jpg"
      ></v-img-container>
    `
  }
}

registerComponent('v-page-two', VPageTwo)
