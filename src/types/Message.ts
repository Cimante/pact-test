export type Message = {
  id: number;
  text: string;
  time: Date;
  from: "self" | "addressee";
  status: "read" | "unread";
};
