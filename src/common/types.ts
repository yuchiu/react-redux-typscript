export interface IMessage {
  message: string;
  author?: string;
}

export interface IMessageList {
  messageList: IMessage[];
}
