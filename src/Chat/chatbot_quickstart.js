// MessageParser.js

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    // Convert the message to lowercase for easier comparison
    const lowerCaseMessage = message.toLowerCase();

    // Check for specific keywords or phrases and invoke corresponding actions
    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("goodbye")) {
      this.actionProvider.sayGoodbye();
    } else {
      // If no specific action is triggered, invoke a default action
      this.actionProvider.defaultAction();
    }
  }
}

export default MessageParser;
