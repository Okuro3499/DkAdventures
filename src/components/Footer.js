import React from "react";

const Footer = () => {
  return (
    <footer className="footer justify-center text-center">
      © {new Date().getFullYear()}, DK Adventures ||
      {` `}
      Built by{` `}
      <a href="gideonollonde@gmail.com">Gideon Okuro</a>
    </footer>
  );
};

export default Footer;
