
import Chatbot from "react-chatbot-kit";

import config from "../../../Chat/config2";
import MessageParser from "../../../Chat/chatbot_quickstart";
import ActionProvider from "../../../Chat/config";

function Chat() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Chat;