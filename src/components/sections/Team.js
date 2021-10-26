import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const Team = ({
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
    "features-tiles-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Team",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {/* Faruk Gutic */}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16"
                    style={{ height: 89, width: 89 }}
                  >
                    <Image
                      src={require("./../../assets/images/team-faruk.png")}
                      alt="Features tile icon 01"
                      width={84}
                      height={84}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Faruk Gutic</h4>
                  <p className="m-0 text-sm">Human resources</p>
                </div>
              </div>
            </div>

            {/* Sinisa milosevic */}
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16"
                    style={{ height: 89, width: 89 }}
                  >
                    <Image
                      src={require("./../../assets/images/team-sinisa.png")}
                      style={{ maxWidth: "fit-content" }}
                      alt="Features tile icon 02"
                      width={84}
                      height={84}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Sinisa Milosevic</h4>
                  <p className="m-0 text-sm">Chief Operating Officer</p>
                </div>
              </div>
            </div>

            {/* Dalibor */}
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16"
                    style={{ height: 89, width: 89 }}
                  >
                    <Image
                      src={require("./../../assets/images/team-dado.png")}
                      alt="Features tile icon 03"
                      width={84}
                      height={84}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Dalibor Vujovic</h4>
                  <p className="m-0 text-sm">Chief Executive Officer</p>
                </div>
              </div>
            </div>

            {/* Enis*/}
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16"
                    style={{ height: 89, width: 89 }}
                  >
                    <Image
                      src={require("./../../assets/images/team-enid.png")}
                      alt="Features tile icon 04"
                      width={84}
                      height={84}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Enis Habul</h4>
                  <p className="m-0 text-sm">CHief Technology officer</p>
                </div>
              </div>
            </div>

            {/* Bilal */}
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div
                    className="features-tiles-item-image mb-16"
                    style={{ height: 89, width: 89 }}
                  >
                    <Image
                      src={require("./../../assets/images/team-bilal.png")}
                      alt="Features tile icon 05"
                      width={84}
                      height={84}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Bilal Hodzic</h4>
                  <p className="m-0 text-sm">Tech lead</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;
