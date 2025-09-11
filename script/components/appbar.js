const logo = require('../../public/logo/favicon.ico');
const list = require('../../public/button/list.svg');

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
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
            color: white;
            font-family: 'Exo 2', Tahoma, Geneva, Verdana, sans-serif;
        }
        .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            
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
            color: #222121ff;

        }
        .nav-links {
            display: flex;
            align-items: center;
        }

        .nav-links ul {
            display: flex;
            gap: 15px;
        }
        .nav-links ul li a {
            color: black;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.3s;
            border-bottom: 2px solid transparent;
        }
        .nav-links ul li a:hover {
            color: #687a85ff;
            border-bottom: 2px solid #687a85ff;
            padding-bottom: 2px;
            cursor: pointer;
            cursor: hand;
        }
        .nav-links ul li a:active {
            color: #000000ff;
        }
        .menu-icon {
            display: none;
            cursor: pointer;
        }
        @media (max-width: 768px) {
            .container {
                flex-wrap: wrap;
                position: fixed;
                width: 100%;
                top: 0;
                background-color: #ffffffff;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
            }

            .nav-links {
                width: 100%;
                flex-basis: 100%;
                display: none;
                margin-top: 10px;
                border-radius: 8px;
                padding: 10px 0;
            }

            .nav-links ul {
                
                flex-direction: column;
                align-items: center;
            }
            .menu-icon {
                display: flex;
                align-items: center;
            }
            
            main {
                margin-top: 80px;
            }
        }   


      </style>
      <div class="container">
        <div class="logo">
        <img src="${logo}" alt="Logo" /><span>AlyMediLink</span>
        </div>
        <div class="menu-icon" id="menu-icon">
            <img src="${list}" alt="Menu" width="30" height="30"/>
        </div>
        <div class="nav-links">
        
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
        
      </div>
    `;
    }
}
customElements.define("app-bar", AppBar);