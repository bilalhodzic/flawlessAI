import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import { ReactComponent as BotIcon } from "../../assets/images/bot.svg";

const botName = "Ena";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Cao, ja sam ${botName}. Tu sam da vam pomognem ukoliko imate bilo kakvih pravnih pitanja`
    ),
  ],
  state: {
    gist: "",
  },
  customComponents: {
    header: () => (
      <div
        style={{
          backgroundColor: "#151719",
          padding: "5px",
          borderRadius: "12px 12px 1px 1px",
          color: "#eceded",
          paddingLeft: 18,
          position: "absolute",
          width: "100%",
          top: 0,
        }}
      >
        Ena AI
      </div>
    ),
    botAvatar: () => <></>,
    botChatMessage: ({ message }) => (
      <div
        style={{
          backgroundColor: "#d1d3d3",
          display: "inline-flex",
          margin: 12,
          padding: 5,
          borderRadius: "0 10px 10px 10px",
          color: "#151719",
          fontSize: "0.8em",
        }}
      >
        {message}
      </div>
    ),
    userChatMessage: ({ message }) => (
      <div
        style={{
          backgroundColor: "#151719",
          display: "flex",
          margin: 12,
          padding: 5,
          borderRadius: "10px 0px 10px 10px",
          color: "#eceded",
          fontSize: "0.8em",
        }}
      >
        {message}
      </div>
    ),
    userAvatar: () => <></>,
  },

  //   widgets: [
  //     {
  //       widgetName: "overview",
  //       widgetFunc: (props) => <Overview {...props} />,
  //       mapStateToProps: ["gist"],
  //     },
  //     {
  //       widgetName: "messageParser",
  //       widgetFunc: (props) => <MessageParser {...props} />,
  //       mapStateToProps: ["gist"],
  //     },
  //     {
  //       widgetName: "actionProviderDocs",
  //       widgetFunc: (props) => <ActionProviderDocs {...props} />,
  //       mapStateToProps: ["gist"],
  //     },
  //   ],
};

export default config;
