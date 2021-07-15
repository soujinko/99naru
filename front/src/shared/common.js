export const IdCheck = (id) => {
    let _reg = /^[a-zA-Z0-9]/;
  
    return _reg.test(id);
  };
  
  export const NickCheck = (nick) => {
    let _reg = /^[가-힣a-zA-Z0-9]/;
  
    return _reg.test(nick);
  };

  export const pwdCheck = (pwd) => {
    let _reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]/;
  
    return _reg.test(pwd);
  };

//   if (!emailCheck(id)) {
//     window.alert("이메일 형식이 맞지 않습니다!");
//     return;
//   }