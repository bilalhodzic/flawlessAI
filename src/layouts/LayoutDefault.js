import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { strings } from "../utils/localization";

import Chatbot from "react-chatbot-kit";
import config from "../components/chatbot/config";
import { ReactComponent as BotIcon } from "../assets/images/bot.svg";
import MessageParser from "../components/chatbot/MessageParser";
import ActionProvider from "../components/chatbot/ActionProvider";

const LayoutDefault = ({ children }) => {
  const [language, setlanguage] = React.useState("bh");
  const [showBot, setshowBot] = React.useState(true);

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
      <div
        className="app-chatbot-container"
        style={{ height: `${showBot ? "28em" : "auto"}` }}
      >
        {showBot && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}

        <BotIcon
          className="app-chatbot-button"
          onClick={() => setshowBot((prev) => !prev)}
        />
      </div>
      <Footer className="mt-16" strings={strings} />
    </>
  );
};

export default LayoutDefault;
