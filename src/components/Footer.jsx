export default function Footer() {
    return (
    <footer className="dsFooter" id="footer-section">
      <div className="dsContainer dsFooterInner">
        <div className="dsFooterLeft">© {new Date().getFullYear()} Danny Sanchez</div>
        <div className="dsFooterRight">Built with React + Vite</div>
      </div>
    </footer>
    );
  }
  
