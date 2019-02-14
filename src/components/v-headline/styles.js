import { html } from 'lit-html'

export default html`
  <style>
    h1 {
      -webkit-transition: text-shadow 0.25s ease;
      -moz-transition: text-shadow 0.25s ease;
      -o-transition: text-shadow 0.25s ease;
      transition: text-shadow 0.25s ease;
      font-style: italic;
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      font-size: 3rem;
      text-align: center;
      color: plum;
      text-shadow: -2px 2px 0px #faf0e8, -6px 6px 0px #034486;
    }
    h1:hover {
      color: #e3b1e3;
      text-shadow: -2px 2px 0px #faf0e8, -10px 10px 0px #30669c;
    }
  </style>
`
