import axios from "axios";
import postData from "../../utils/postData";

// ActionProvider starter code
class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  handleMessage = async (message) => {
    let result = await postData(`/predict`, {
      intent: message,
    });
    console.log("🚀 ~ result", result);
    if (!result.intent) {
      let message2 = this.createChatBotMessage(result);
      this.addMessageToState(message2);
    } else {
      let message2 = this.createChatBotMessage(result.intent);
      this.addMessageToState(message2);
    }
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}
export default ActionProvider;
