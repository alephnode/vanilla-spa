import { html } from '/node_modules/lit-html/lit-html.js'

export default html`
  <style>
    .base {
      display: flex;
    }
    .vertical {
      display: flex;
      flex-direction: column;
    }

    .ccc {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .space {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  </style>
`
