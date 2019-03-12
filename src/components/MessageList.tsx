import React from "react";
import { IMessageList } from "../common/types";

interface IProps extends IMessageList {}

const MessageList: React.FunctionComponent<IProps> = ({ messageList = [] }) => (
  <ul>
    <h1>Message List</h1>
    {messageList.map((messageItem, i) => (
      <li key={`message-item-${i}`}>
        <span>message: {messageItem.message}</span>
        <br />
        <span>author: {messageItem.author}</span>
      </li>
    ))}
  </ul>
);

export default MessageList;
