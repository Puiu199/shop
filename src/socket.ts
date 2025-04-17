import { io, Socket } from "socket.io-client";

const token = localStorage.getItem("accessToken");

export const socket: Socket = io("https://dreamerz.net/", {
  transports: ["websocket"],
  auth: {
    authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNzg5NWZkNi1jZjdlLTQzNTktYmNjOS04YzRiZGU3MWRhMDEiLCJlbWFpbCI6ImNvc2FyY2FtYXhpbUBnbWFpbC5jb20iLCJpYXQiOjE3NDQ2NDY2MjUsImV4cCI6MTc0NDY1MDIyNX0.N9bm606EUAIA5LZLZR4GvIB1h-mNOE-yM8CQfgX-lvo",
  },
  query: {
    userId: "a7895fd6-cf7e-4359-bcc9-8c4bde71da01",
  },
  autoConnect: true,
});
