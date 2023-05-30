import "../component-styles/Contact.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const countryCode = "+91";
  const tnum = "9876543210";
  const email = "info@urbanartstore.com";

  const telephone =
    countryCode +
    " " +
    tnum.substring(0, 3) +
    "-" +
    tnum.substring(3, 6) +
    "-" +
    tnum.substring(6, 10);

  return (
    <div className="Contact">
      <div className="title">
        <div className="common-heading">contact.</div>
        <div className="common-desc contact-details">
          <span className="phone-num">{telephone}</span>&emsp;|&emsp;{email}
        </div>
      </div>
      <div className="contact-essentials-container">
        <div className="form-container">
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              document.getElementById("submit-ack").style.opacity = "1";
            }}
          >
            <input
              className="form-input name"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="form-input email"
              title="Enter a valid email address"
              type="email"
              name="email"
              placeholder="Email *"
              required={true}
              pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
            />
            <input
              className="form-input subject"
              type="text"
              name="subject"
              placeholder="Subject"
            />
            <textarea
              className="form-input message"
              type="text"
              name="message"
              placeholder="Message"
            />
            <div className="submit-container">
              <p id="submit-ack" className="ack">
                Thanks for submitting!
              </p>
              <button type="submit">Submit</button>
            </div>
          </form>
          <div className="mailing-list">
            <p className="mailing-list-heading">Join our mailing list</p>
            <div className="mailing-list-fields">
              <input
                className="form-input"
                type="email"
                name=""
                id=""
                placeholder="Email *"
                required={true}
                pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"
              />
              <button type="submit" className="subscribe">
                <span>Subscribe&nbsp;Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="other-options">
          <div className="other-options-container">
            <span className="other-options-item" id="faq">
              FAQ
            </span>
            &emsp;|&emsp;
            <span className="other-options-item" id="downloads-and-refunds">
              Downloads & Refunds
            </span>
            &emsp;|&emsp;
            <span className="other-options-item" id="store-policy">
              Store Policy
            </span>
          </div>
          <div className="contact-icons">
            <a href="https://www.facebook.com/wix/" id="facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.github.com/stowaway4331" id="github">
              <FaGithubAlt />
            </a>
            <a href="https://www.instagram.com/jer_me_d/" id="instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
