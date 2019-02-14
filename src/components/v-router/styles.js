import { html } from 'lit-html'

export default html`
  <style>
    .linkTxt {
      -webkit-font-smoothing: antialiased;
      font-weight: 600;
      font-family: 'Playfair Display', serif;
      text-align: center;
      color: var(--secondary-color);
      font-size: 1.25rem;
      padding: 10px;
      padding-bottom: 9px;
    }
    .linkTxt:hover {
      border-bottom: 9px solid var(--txt-color);
      padding-bottom: 0;
    }
  </style>
`
