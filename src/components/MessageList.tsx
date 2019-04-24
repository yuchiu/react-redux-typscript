import React from "react";
import { IMessageList } from "../common/types";

interface IProps extends IMessageList {
  handleRemoveMessage: (e: React.FormEvent<EventTarget>) => void;
}

const MessageList: React.FunctionComponent<IProps> = ({
  messageList = [],
  handleRemoveMessage = () => {}
}) => (
  <ul>
    <h1>Message List</h1>
    {messageList.map((messageItem, i) => (
      <li key={`message-item-${i}`}>
        <span>message: {messageItem.message}</span>
        <br />
        <span>author: {messageItem.author}</span>
        <br />
        <button name={messageItem.id} onClick={handleRemoveMessage}>
          remove
        </button>
        <br />
        <br />
      </li>
    ))}
  </ul>
);

export default MessageList;
