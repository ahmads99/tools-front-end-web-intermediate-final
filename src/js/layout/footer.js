import { LitElement, html, css } from 'lit'

class FeeFooter extends LitElement {
  static styles = css`
    .main-footer {
      color: #f8f9fa;
      background-color: #212529;
      padding: 1rem;
    }

    .container {
      text-align: center;
    }
  `

  render() {
    const date = new Date()
    const year = date.getFullYear()

    return html`
      <div class="main-footer">
        <div class="container">&copy; ${year} PT. Benzodiahmad - Dicoding Academy</div>
      </div>
    `
  }
}
customElements.define('benzo-footer', FeeFooter)
