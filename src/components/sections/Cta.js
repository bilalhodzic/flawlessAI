import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Button from "../elements/Button";
import { send } from "emailjs-com";
import { strings } from "../../utils/localization";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );
  const [contactData, setcontactData] = React.useState({
    name: "",
    email: "",
  });
  const [contactError, setcontactError] = React.useState({
    name: "",
    email: "",
  });
  const [messageSent, setmessageSent] = React.useState(false);
  const [messageText, setmessageText] = React.useState("");

  const onDataChange = (e) => {
    setcontactData({ ...contactData, [e.target.id]: e.target.value });
  };

  //regex validation of email
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = async () => {
    //first check if the data is correct
    let errors = contactError;
    let valid = true;
    if (contactData.name === undefined || contactData.name === "") {
      errors.name = strings.inputErrorName;
      valid = false;
    } else {
      errors.name = "";
    }
    if (!validateEmail(contactData.email)) {
      errors.email = strings.inputErrorEmail;
      valid = false;
    } else {
      errors.email = "";
    }

    setcontactError({ name: errors.name, email: errors.email });

    if (valid) {
      send(
        "service_vgyphh6",
        "template_1t6weql",
        contactData,
        "user_ur9FdFTmuF1hNA1S8sLp6"
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setmessageSent(true);
          setmessageText(strings.contactSuccessMessage);
        })
        .catch((err) => {
          console.log("FAILED...", err);
          setmessageSent(true);
          setmessageText(strings.contactFailedMessage);
        });
    }
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className="cta-slogan">
            <h3 className="m-0">{strings.contactTitle}</h3>
            <h4 className="m-0">{strings.contactSubtitle}</h4>
          </div>
          <div className="cta-action">
            {messageSent ? (
              <span>{messageText}</span>
            ) : (
              <>
                <Input
                  id="name"
                  type="text"
                  label="Name"
                  labelHidden
                  placeholder={strings.contactPlaceholderName}
                  value={contactData.name}
                  hint={contactError.name}
                  status={"error"}
                  onChange={onDataChange}
                />
                <br />
                <Input
                  id="email"
                  type="email"
                  label="Subscribe"
                  labelHidden
                  hasIcon="right"
                  placeholder={strings.contactPlaceholderEmail}
                  value={contactData.email}
                  status={"error"}
                  hint={contactError.email}
                  onChange={onDataChange}
                ></Input>
                <br />
                <Button color="yellow" wide onClick={handleSubmit}>
                  {strings.contactButton}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
