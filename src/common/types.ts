export interface IMessage {
  id: string;
  message: string;
  author?: string;
}

export interface IMessageList {
  messageList: IMessage[];
}
