const socketIo = require("socket.io");
const socketIo = require("socket.io");
const io = socketIo(http);
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

io.on("connection", (socket) => {
  const currentDate = moment().format("YYYY-MM-DD HH:mm:ss"); //현재 시간
  const joinedId = [];

  socket.on("join", ({ userInfo }) => {
    const nickname = userInfo.nickname;
    const userSocketId = socket.id;

    if (ids.indexOf(userSocketId) == -1) {
      ids.push(userSocketId);
      socket.emit("enterUser", `${nickname}님이 입장하셨습니다.`);
    }
  });

  socket.on("sendMsg", (data) => {
    const message = {
      sendMsg: data.message,
      nickname: data.user.nickname,
      date: currentDate,
    };
    io.emit("receiveMsg", message);
  });

  const currentOn = [];
  currentOn.push(nickname);

  io.emit("currentOn", currentOn); // 현재 접속자 리스트

  // 게시물 포스팅 알람
  socket.on("posting", (data) => {
    const post = {
      nickname: data.nickname,
      date: currentDate,
    };
    io.emit("notificationAlarm", post);
  });

  socket.on("disconnect", () => {
    ids.splice(ids.indexOf(userSocketId), 1);
  });
});
