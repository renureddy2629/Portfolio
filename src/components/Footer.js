import React from 'react';
import '../App.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ marginTop: 'auto' }} className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-copyright">Copyright &copy; {year} ABCDEF</p>
          <div className="footer-links">
            <a className='App-link' style={{ textDecoration: 'none' }} href="mailto:ABCDEF@mail.com">Contact Me</a>
            <a className='App-link' style={{ textDecoration: 'none' }} href="https://some-random-link.linkedin.com/">LinkedIn</a>
          </div>
        </div>
        <div className="footer-social">
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
