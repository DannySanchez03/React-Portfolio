export default function Footer() {
    return (
    <section className="dsSection" id="contact">
      <div className="dsContainer">
        <div className="dsSectionHeader">
          <h2 className="dsH2">Contact</h2>
          <p className="dsLead">Let’s build something great together.</p>
        </div>

        <div className="dsContactGrid">
          <a className="dsContactCard" href="tel:+19563797121">
            <div className="dsContactLabel">Phone</div>
            <div className="dsContactValue">+1 (956) 379-7121</div>
          </a>

          <a className="dsContactCard" href="mailto:dannyproa303@gmail.com">
            <div className="dsContactLabel">Email</div>
            <div className="dsContactValue">dannyproa303@gmail.com</div>
          </a>

          <a className="dsContactCard" href="https://github.com/DannySanchez03" target="_blank" rel="noreferrer">
            <div className="dsContactLabel">GitHub</div>
            <div className="dsContactValue">@DannySanchez03</div>
          </a>
        </div>
      </div>
    </section>
    );
  }
