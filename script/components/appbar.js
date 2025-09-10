const logo = require('../../public/logo/favicon.ico');

class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #ffffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            color: white;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            height: 60px;
        }
        .logo {
            font-size: 1.1rem;
            font-weight: bold;
            display: flex;
            align-items: center;
        }
        .logo img {
            height: 40px;
        }
        .logo span {
            margin-left: 5px;
            vertical-align: middle;
            color: black;
        }

        .nav-links {
            display: flex;
            gap: 15px;
        }
        .nav-links a {
            color: black;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.3s;
            border-bottom: 2px solid transparent;
        }
        .nav-links a:hover {
            color: #000000ff;
            border-bottom: 2px solid #000000ff;
            padding-bottom: 2px;
            cursor: pointer;
            cursor: hand;
        }
        .nav-links a:active {
            color: #000000ff;
        }

      </style>
      <div class="container">
        <div class="logo">
        <img src="${logo}" alt="Logo" /><span>AlyMediLink</span>
        </div>
        <div class="nav-links">
          <a href="#home">Home</a>
          <a href="#service">Service</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    `;
    }
}
customElements.define("app-bar", AppBar);