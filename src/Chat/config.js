// ActionProvider.js

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Method to greet the user
  greet() {
    const greetingMessage = this.createChatBotMessage(
      "Hello! How can I assist you?"
    );
    this.updateChatbotState(greetingMessage);
  }

  // Method to say goodbye to the user
  sayGoodbye() {
    const goodbyeMessage = this.createChatBotMessage(
      "Goodbye! Have a great day."
    );
    this.updateChatbotState(goodbyeMessage);
  }

  // Method to handle a default action if no specific action is triggered
  defaultAction() {
    const defaultMessage = this.createChatBotMessage(
      "I'm sorry, I didn't understand that."
    );
    this.updateChatbotState(defaultMessage);
  }

  // Method to update the chatbot state with the new message
  updateChatbotState(message) {
    // Use the setState function passed from the Chatbot component to update the state
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
