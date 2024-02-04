import React from 'react';
import '../App.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
import { faLinkedin, faGithub, faGoogle} from '@fortawesome/free-brands-svg-icons';
=======
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
>>>>>>> 2824dd45e053b8eb1d7f0698a7aed03184e65484

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ marginTop: 'auto' }} className="footer">
      <div className="footer-container">
        <div className="footer-content">
<<<<<<< HEAD
          <p className="footer-copyright">Get in Contact</p>
          <div className="footer-links">
            <div className="footer-social">
              <a className='App-link' style={{ textDecoration: 'none' }} href="mailto:renukareddy442@mail.com">
                <FontAwesomeIcon icon={faGoogle} /> Email Me
              </a>
              <a className='App-link' style={{ textDecoration: 'none' }} href="www.linkedin.com/in/renukapasam.linkedin.com/">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
              <a className='App-link' style={{ textDecoration: 'none' }} href="https://github.com/renureddy2629">
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
            </div>
          </div>
        </div>
=======
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
>>>>>>> 2824dd45e053b8eb1d7f0698a7aed03184e65484
      </div>
    </footer>
  );
};

export default Footer;
