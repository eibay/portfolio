class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="nav-header roboto-bold">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>`;
  }
}
customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <div class="footer">
    <h1>Connect</h1>
    <p>Keep in touch through the following channels.</p>
    <a href="https://www.linkedin.com/in/elmeribayan/" target="_blank" class="fa fa-linkedin grow"></a>
    <a href="https://github.com/eibay" target="_blank" class="fa fa-github grow"></a>
    <a href="https://x.com/eibayan" target="_blank" class="fa fa-x grow"></a>
  </div>`;
  }
}
customElements.define("my-footer", MyFooter);