import { html } from 'lit-html'
import Base from '../../base'
import '../../components/v-graph'
import '../../components/v-img-container'
import registerComponent from '../../common/register-component'

class VPageTwo extends Base {
  async onMount() {
    let r = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    let { url } = await r.json()
    this._img = url
    this.updateTpl()
  }

  tpl() {
    return html`
      <v-graph>Images of interest</v-graph>
      ${this._img &&
        html`
          <v-img-container
            src="https://www.apogeephoto.com/wp-content/uploads/2016/july2014/Sanders_photos/black-white.jpg"
          ></v-img-container>
        `}
    `
  }
}

registerComponent('v-page-two', VPageTwo)
