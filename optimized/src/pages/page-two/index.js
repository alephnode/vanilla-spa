import { html } from 'lit-html'
import Base from '../../base'
import '../../components/v-graph'
import '../../components/v-img-container'
import registerComponent from '../../common/register-component'

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
