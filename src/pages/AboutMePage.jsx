import pic from '../assets/me.jpg';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
    <section className="dsHero" id="about-me">
      <div className="dsContainer dsHeroGrid">
        <div className="dsHeroText">
          <div className="dsKicker">Full‑Stack Developer</div>
          <h1 className="dsH1">Building clean, fast web apps with personality.</h1>
          <p className="dsLead">
            I’m Danny — a computer science student who enjoys turning ideas into polished, usable products.
            I work across the stack (MERN) and I’m actively looking for internships.
          </p>

          <div className="dsPills">
            <span className="dsPill">React</span>
            <span className="dsPill">Node.js</span>
            <span className="dsPill">MongoDB</span>
            <span className="dsPill">SQL</span>
          </div>

          <div className="dsHeroActions">
            <Link className="dsBtnPrimary" to="/Portfolio">See work</Link>
            <Link className="dsBtnGhost" to="/Contact">Get in touch</Link>
          </div>
        </div>

        <div className="dsHeroCard">
          <img src={pic} alt="A photo of me" className="dsAvatar" />
          <div className="dsHeroCardBody">
            <div className="dsHeroCardName">Danny Sanchez</div>
            <div className="dsHeroCardSub">UTRGV • CS • Senior</div>
          </div>
        </div>
      </div>

      <div className="dsContainer dsAboutBody">
        <div className="dsPanel">
          <h2 className="dsH2">About</h2>
          <p className="dsText">
            I started out with C++ and Java (OOP + data structures), and now I build with JavaScript,
            React, Node, and modern APIs. I like projects that mix thoughtful UI with solid backend logic.
          </p>
          <p className="dsText">
            I’m especially interested in software engineering roles (frontend or backend) and products
            where I can learn fast, contribute quickly, and ship features that feel great to use.
          </p>
        </div>
      </div>
    </section>
    );
  }
