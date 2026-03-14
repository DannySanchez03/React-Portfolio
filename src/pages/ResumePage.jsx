import Resume from '../assets/Resume 2024.pdf'
import Certificate from '../assets/Certificate.pdf'

export default function Footer() {
    return (
    <section className="dsSection" id="resume">
      <div className="dsContainer">
        <div className="dsSectionHeader">
          <h2 className="dsH2">Resume</h2>
          <p className="dsLead">Skills, tools, and credentials.</p>
        </div>

        <div className="dsResumeGrid">
          <div className="dsPanel">
            <h3 className="dsH3">Core Skills</h3>
            <div className="dsTagGrid">
              <span className="dsTag">JavaScript</span>
              <span className="dsTag">React</span>
              <span className="dsTag">Node.js</span>
              <span className="dsTag">Express</span>
              <span className="dsTag">MongoDB</span>
              <span className="dsTag">SQL (MySQL)</span>
              <span className="dsTag">REST APIs</span>
              <span className="dsTag">GraphQL</span>
              <span className="dsTag">Git</span>
              <span className="dsTag">Java</span>
              <span className="dsTag">C++</span>
            </div>
          </div>

          <div className="dsPanel">
            <h3 className="dsH3">Downloads</h3>
            <div className="dsDownloadList">
              <a className="dsDownload" href={Resume} target="_blank" rel="noreferrer">
                PDF Resume
              </a>
              <a className="dsDownload" href={Certificate} target="_blank" rel="noreferrer">
                UTSA Bootcamp Certificate
              </a>
            </div>

            <div className="dsText">
              Advanced data structures exposure (linked lists → graphs) and hands-on experience building MERN applications.
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
