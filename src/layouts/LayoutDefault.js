import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { strings } from "../utils/localization";

const LayoutDefault = ({ children }) => {
  const [language, setlanguage] = React.useState("en");

  const changeLang = (value) => {
    setlanguage(value);
    strings.setLanguage(value);
  };
  return (
    <>
      <Header
        navPosition="center"
        hideSignin
        className="reveal-from-bottom"
        language={language}
        setLanguage={changeLang}
        strings={strings}
      />
      <main className="site-content" strings={strings}>
        {children}
      </main>
      <Footer className="mt-16" strings={strings} />
    </>
  );
};

export default LayoutDefault;
