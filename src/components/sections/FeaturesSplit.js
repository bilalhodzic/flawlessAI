import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { strings } from "../../utils/localization";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: strings.blockTitle2,
    paragraph: strings.blockParagpraph2,
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  {strings.researchItem1Key}
                </div>
                <h3 className="mt-0 mb-12"> {strings.researchItem1Title} </h3>
                <p className="m-0">{strings.researchItem1Body}</p>
                <p style={{ fontSize: "0.8rem" }}>
                  <ColorDot color="#ffab40" /> {strings.researchItem1Dot1}
                  <ColorDot color="#78909C" marginLeft="1rem" />{" "}
                  {strings.researchItem1Dot2}
                  <ColorDot color="#85d5e6" marginLeft="1rem" />{" "}
                  {strings.researchItem1Dot3}
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/map.png")}
                  alt="Features split 01"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  {strings.researchItem2Key}
                </div>
                <h3 className="mt-0 mb-12">{strings.researchItem2Title}</h3>
                <p className="m-0">
                  {strings.researchItem2Body}{" "}
                  <a
                    href={require("./../../assets/docs/infografik.pdf")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    infographic
                  </a>
                  .
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/infografik-keys.png")}
                  alt="infografik keys"
                  width={528}
                  height={396}
                />
                {/* <IconDiv src={require("./../../assets/images/map.png")} /> */}
              </div>
            </div>

            {/* <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                </div>
                <h3 className="mt-0 mb-12">Data-driven insights</h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  — Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/features-split-image-03.png")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
const ColorDot = ({ color, width = 12, marginLeft = 0 }) => (
  <div
    style={{
      height: width,
      width: width,
      borderRadius: "50%",
      backgroundColor: color,
      display: "inline-flex",
      marginLeft: marginLeft,
    }}
  />
);
const IconDiv = ({ src, heading = "", body = "" }) => (
  <div
    style={{
      height: "5rem",
      width: "auto",
      borderRadius: "10%",
      backgroundColor: "#2c2e32",
      // display: "inline-flex",
    }}
  >
    <Image src={src} alt="Features split 01" width={28} height={36} />
  </div>
);

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
