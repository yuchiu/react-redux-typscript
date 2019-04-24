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
      { id: "0", message: "aloha", author: "yeman" },
      { id: "1", message: "hey hey hey", author: "ayes" },
      { id: "2", message: "why the earth spins", author: "anoymous" }
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

  handleRemoveMessage = (e: React.FormEvent<EventTarget>) => {
    const { name }: any = e.target;
    const { messageList } = this.state;
    const newMessageList = messageList.filter(message => message.id !== name);
    this.setState({
      messageList: newMessageList
    });
  };

  render() {
    const { messageList } = this.state;
    return (
      <div className="App">
        <main>
          <MessageForm handleAddMessage={this.handleAddMessage} />
          <MessageList
            messageList={messageList}
            handleRemoveMessage={this.handleRemoveMessage}
          />
        </main>
      </div>
    );
  }
}

export default App;
