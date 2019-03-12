import React, { Component } from "react";
import "./App.css";

import { IMessage, IMessageList } from "../common/types";
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

interface IState {
  messageList: IMessage[];
}

class App extends Component<{}, IState> {
  state = {
    messageList: [
      { message: "aloha", author: "yeman" },
      { message: "hey hey hey", author: "ayes" },
      { message: "why the earth spins", author: "anoymous" }
    ]
  };

  handleAddMessage = (message: IMessage) => {
    const { messageList }: IMessageList = this.state;
    if (!message.author) {
      message.author = "annoymous";
    }
    messageList.push(message);
    this.setState({
      messageList
    });
  };

  render() {
    const { messageList } = this.state;
    return (
      <div className="App">
        <main>
          <MessageForm handleAddMessage={this.handleAddMessage} />
          <MessageList messageList={messageList} />
        </main>
      </div>
    );
  }
}

export default App;
