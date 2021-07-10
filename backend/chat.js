const socketIo = require("socket.io");
const server = require('./backend/index')
const io = socketIo(server);
const jwt = require('jsonwebtoken');
const User = require('./models/user');

const currentOn = [];
io.on("connection", (socket) => {
  const currentDate = JSON.stringify(new Date());

  socket.on("join", ({ token }) => {
    if (token === null) {
      return;
    }
    const { userId } = jwt.verify(token, '키');
    
    User.findById(userId)
    .then((user) => {
      const userInfo = user 
      const users = {
        loginId : userInfo.id,          
        nickname: userInfo.nickname,
        socketId : socket.id
      }; 
      currentUsers.push(users);
      if (currentOn.indexOf(users.nickname) == -1) {  //유저아이디가 있으면 현재인원에추가안해줘도 됌
        currentOn.push(users.nickname);
        io.emit('enterUser', users.nickname);
        io.emit('currentOn', currentOn); // 현재 접속자 리스트
      };
    });
  });

  //메세지 주고받기
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
    io.emit("postNotification", post);
  });

  //댓글 작성 알람
  socket.on("writingComment", (post, comment) => {
      const postUser = {
          nickname : post.nickname
      };
      const commentUser = {
        comment : comment.comment,  
        nickname : comment.nickname,
        date: currentDate
      };
      socketid = sds;
      socket.broadcast.to(socketid).emit("commentNotification", postUser, commentUser) //특정 socketid에게만 전송
  });

  //로그아웃 했을경우
  socket.on("signOut", (token) => {
    // 토큰 auth 해서 currentUsers에 있는 사람들중 해당 nickname이랑 맞는 사람 find

    currentOn.splice(currentOn.indexOf(nickname), 1);
    io.emit("currentOn", currentOn); // 현재 접속자 리스트 업데이트
    io.emit("exitUser", `${nickname}님이 나가셨습니다.`);
  });

  socket.on("disconnect", () => {});// disconnect할때 해당 socket.id가 사라지는지 검사
});                                  // 만약 그게 사라진다면 유저아이디랑 연결된 id 없애면 됌.


export default io

