import { defineStore } from "pinia";

import { Message } from "../types/Message";

export const useStore = defineStore("store", {
  state: () => ({
    isSidebarOpen: true,
    isChatSelected: false,
    chatSelectedId: 0,
    chats: [
      {
        id: 1,
        name: "Чат 1",
        messages: [
          {
            id: 1,
            text: "Привет! Как дела?",
            time: new Date("2024-06-02T18:44:00"),
            from: "self",
            status: "read",
          },
          {
            id: 2,
            text: "Приемлемо",
            time: new Date("2024-06-02T18:47:00"),
            from: "addressee",
            status: "read",
          },
        ] as Message[],
        last_seen: "8 минут назад",
      },
      {
        id: 2,
        name: "Чат 2",
        messages: [
          {
            id: 1,
            text: "Простое текстовое сообщение",
            time: new Date(new Date("2024-06-02T12:32:00")),
            from: "self",
            status: "read",
          },
        ] as Message[],
        last_seen: "16 минут назад",
      },
      {
        id: 3,
        name: "Чат 3",
        messages: [
          {
            id: 1,
            text: "А не пора ли выпить пива?",
            time: new Date(new Date("2024-06-02T19:57:00")),
            from: "self",
            status: "read",
          },
          {
            id: 2,
            text: "Впрочем, что я спрашиваю? Всегда пора!",
            time: new Date(new Date("2024-06-02T19:57:17")),
            from: "self",
            status: "read",
          },
          {
            id: 3,
            text: "🤣",
            time: new Date(new Date("2024-06-02T19:58:04")),
            from: "addressee",
            status: "read",
          },
        ] as Message[],
        last_seen: "4 часа назад",
      },
    ],
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    setActiveChat(chat_id: number) {
      this.isChatSelected = true;
      this.chatSelectedId = chat_id;
    },
    sendMessage(text: string) {
      const currID = new Date().getMilliseconds();
      const currChat = this.chats.find(
        (chat) => chat.id === this.chatSelectedId
      );
      currChat?.messages?.push({
        id: currID,
        text,
        time: new Date(),
        from: "self",
        status: "unread",
      });
      setTimeout(() => {
        currChat?.messages.map((msg) => {
          if (msg.id === currID) msg.status = "read";
        });
      }, 1000);
    },
  },
  getters: {
    activeChat: (state) => {
      const chat = {
        ...state.chats.find((chat) => chat.id === state.chatSelectedId),
      };
      if (chat.messages)
        chat.messages = [...chat.messages].sort((a, b) =>
          a.time < b.time ? -1 : 1
        );
      return chat;
    },
  },
});
