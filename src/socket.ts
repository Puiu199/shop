import { io, Socket } from "socket.io-client";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhNzg5NWZkNi1jZjdlLTQzNTktYmNjOS04YzRiZGU3MWRhMDEiLCJlbWFpbCI6ImNvc2FyY2FtYXhpbUBnbWFpbC5jb20iLCJpYXQiOjE3NDQ2NDY2MjUsImV4cCI6MTc0NDY1MDIyNX0.N9bm606EUAIA5LZLZR4GvIB1h-mNOE-yM8CQfgX-lvo";
export const socket: Socket = io("https://dreamerz.net", {
  transports: ["websocket"],
  //   auth: {
  //     authorization: token,
  //   },
  query: {
    userId: "4dfafdf0-49bc-4478-ad61-1708388d286f",
  },
  autoConnect: true,
});
