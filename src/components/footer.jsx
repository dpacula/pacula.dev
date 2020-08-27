import React from 'react';

const year = new Date().getFullYear()

function Footer() {
  return (
  <footer>
    <div class="f-container">
      <h1>Let's Talk</h1>
      <p>Always open to a conversation about what I do, or lorem ipsum footer text talking so much! talk talk talk.</p>
      <p>You can also reach me around the web: Github, Twitter, Instagram, Email.</p>
    </div>
    <div class="copyright">
      <p>Copyright {year} | Derek Pacula</p>
    </div>
  </footer>
  );
}

export default Footer;