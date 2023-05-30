import "../component-styles/Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="Footer">
      <div className="real-footer">
        &#169;&nbsp;{year} by The Urban Art Store. Created by&nbsp;
        <a href="http://github.com/stowaway4331" target="blank">
          Jeremie Dsouza
        </a>
      </div>
    </div>
  );
};

export default Footer;
