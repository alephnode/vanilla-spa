import { html } from 'lit-html'
import Base from '../../base'
import '../../components/v-headline'
import '../../components/v-graph'
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
      <v-headline>Page Two</v-headline>
      <v-graph>Welcome to the page</v-graph>
      ${this._img &&
        html`
          <img src=${this._img} />
        `}
    `
  }
}

registerComponent('v-page-two', VPageTwo)
