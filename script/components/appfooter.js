const logo = require('../../public/logo/favicon.ico');

class AppFooter extends HTMLElement {
    constructor(){
        super();
        this.shadowDom = this.attachShadow({ mode: 'open' });
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowDom.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #222121ff;
            color: white;
            font-family: 'Exo 2', Tahoma, Geneva, Verdana, sans-serif;
            position: relative;
            bottom: 0;
        }
        .footer {
            padding: 2rem 4rem;
        }
        .container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
        }
        .footer-content {
            flex: 1 1 200px;
            margin: 10px;
        }
        .footer-content img {
            height: 50px;
            margin-bottom: 10px;
        }
        .footer-content h3 {
            margin-bottom: 10px;
            color: #f4b41a;
            font-size: 1.2rem;
        }
        .footer-content p {
            margin-bottom: 8px;
            line-height: 1.5;
            font-size: 0.9rem;
            color: #d1d1d1;
        }
        .footer-content ul {
            list-style: none;
            padding: 0;
        }
        .footer-content ul li {
            margin-bottom: 8px;
        }
        .footer-content ul li a {
            color: #d1d1d1;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s;
        }
        .footer-content ul li a:hover {
            color: #f4b41a;
        }
        .socials a {
            margin-right: 10px;
            display: inline-block;
        }
        .socials a img {
            height: 30px;
            filter: brightness(0) invert(1);
            transition: filter 0.3s;
        }
        .socials a img:hover {
            filter: brightness(0) invert(0.7) sepia(1) saturate(5) hue-rotate(10);
        }
        @media (max-width: 768px) {
            .footer {
                padding: 1rem 2rem;
            }
            .container {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .footer-content {
                margin: 10px 0;
                flex: 1 1 100%;
            }
        }
        </style>
        <div class="footer">
            <div class="container">
                <div class="footer-content">
                    <img src="${logo}" alt="logo">
                    <p>Professional IT consulting services provider with a focus on security, cloud, and infrastructure.</p>
                </div>
                <div class="footer-content">
                    <h3>Contact</h3>
                    <p>Bantengan, Mulyosari, Kec. Pagerwojo, Kabupaten Tulungagung, Jawa Timur 66262</p>
                    <p>aliamem16@gmail.com</p>
                    <p>+62 857-3883-7735</p>
                </div>
                <div class="footer-content">
                    <h3>Link</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#service">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-content">
                    <h3>Follow Us</h3>
                    <div class="socials">
                        <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new--v1.png"/></a>
                        <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/github.png"/></a>
                        <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png"/></a>
                        <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/tiktok--v1.png"/></a>
                    </div>
                </div>
            </div>
        </div>
        `;

    }
}

customElements.define('app-footer', AppFooter);