import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { strings } from "../../utils/localization";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner ",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: strings.featureTitle,
    paragraph: strings.featureParagraph,
  };

  return (
    <section {...props} className={outerClasses} id="features">
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {/* Document automation */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-document.png")}
                      alt="Features tile icon 01"
                      width={24}
                      height={34}
                      style={{ height: "24px" }}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">{strings.featureTitle1}</h4>
                  <p className="m-0 text-sm">{strings.featureBody1}</p>
                </div>
              </div>
            </div>

            {/* COntract review */}
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-contract.png")}
                      alt="Features tile icon 02"
                      width={24}
                      height={34}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">{strings.featureTitle2}</h4>
                  <p className="m-0 text-sm">{strings.featureBody2}</p>
                </div>
              </div>
            </div>

            {/* Legal Analytics */}
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-analytics.png")}
                      alt="Features tile icon 03"
                      width={34}
                      height={34}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">{strings.featureTitle3}</h4>
                  <p className="m-0 text-sm">{strings.featureBody3}</p>
                </div>
              </div>
            </div>

            {/* Robot asistant */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-robot.png")}
                      alt="Features tile icon 04"
                      width={34}
                      height={34}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">{strings.featureTitle4}</h4>
                  <p className="m-0 text-sm">{strings.featureBody4}</p>
                </div>
              </div>
            </div>

            {/* Monitoring, managment */}
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/feature-managment.png")}
                      alt="Features tile icon 05"
                      width={34}
                      height={34}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">{strings.featureTitle5}</h4>
                  <p className="m-0 text-sm">{strings.featureBody5}</p>
                </div>
              </div>
            </div>

            {/* Deals managment */}
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/search.png")}
                      alt="Features tile icon 06"
                      width={34}
                      height={34}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">{strings.featureTitle6}</h4>
                  <p className="m-0 text-sm">{strings.featureBody6}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
