class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log("🚀 ~ this.state", this.state);
    if (this.state.contractInProgress) {
      this.actionProvider.handleContract(message);
    } else {
      console.log(message);
      this.actionProvider.handleMessage(message);
    }
  }
}

export default MessageParser;
