const socketIo = require("socket.io");
const io = socketIo(http);
const moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

io.on("connection", (socket) => {
  const currentDate = moment().format("YYYY-MM-DD HH:mm:ss"); //현재 시간
  const joinedId = [];
  const userSocketId = socket.id;
  const currentOn = [];

  socket.on("join", ({ userInfo }) => {
    const nickname = userInfo.nickname;
    currentOn.push(nickname);

    if (joinedId.indexOf(userSocketId) == -1) {
      joinedId.push(userSocketId);
      socket.emit("enterUser", `${nickname}님이 입장하셨습니다.`);
    }
  });

  io.emit("currentOn", currentOn); // 현재 접속자 리스트

  socket.on("sendMsg", (data) => {
    const message = {
      sendMsg: data.message,
      nickname: data.user.nickname,
      date: currentDate,
    };
    io.emit("receiveMsg", message);
  });

  // 게시물 포스팅 알람
  socket.on("posting", (giveNickname) => {
    const post = {
      nickname: giveNickname,
      date: currentDate,
    };
    io.emit("notificationAlarm", post);
  });

  socket.on("disconnect", () => {
    joinedId.splice(joinedId.indexOf(userSocketId), 1);
    currentOn.splice(currentOn.indexOf(nickname), 1);
  });
});
