class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  async parse(message) {
    console.log(message);
    this.actionProvider.handleMessage(message);
  }
}

export default MessageParser;
