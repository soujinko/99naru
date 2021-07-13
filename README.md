# 항해나루 - Hanghaenaru

 - ### 프로젝트 소개  
항해나루(Hanghaenaru) is a mockup sns project    
  
- ### 프로젝트 기간   
2021/07/09 ~ 2021/07/15
## 1. 📌Wireframe

https://ovenapp.io/view/x1MRnikLCmad6COoQmYy1sRBdBObMDRL#QFJkC

## 2. 🤝Developers

- Backend (Node.js)
  - 고수진 : sign in, sign up, userSchema
  - 김승빈 : post and comment
  - 이경원 : chat and socket.io
- Frontend (React)
  - 오일교
  - 최지혁

## 3. 🌟 API

https://docs.google.com/spreadsheets/d/13mMW-JBf84557AGc705Y50cH6GSldPZ9zSSz78e2UoE/edit#gid=0


| 페이지 | 기능 | API URL | Method | request | response |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 로그인 | 로그인하기 | /signin | `POST` | loginId, password | token : {userId, nickname, expiresIn} |
| 로그인 | 중복확인 | /duplicate | `POST` | loginId, password | token : {userId, nickname, expiresIn} |
| 로그인 | 회원가입하기 | /signup | `POST` | loginId, password, nickname | 201, {message: '회원가입을 축하합니다.'} |

<table>
  <tr>
    <th>페이지</th>
    <th>기능</th>
    <th>API URL</th>
    <th>Method</th>
    <th>request</th>
    <th>response</th>
  </tr>
  <tr>
    <td>로그인</td>
    <td>로그인하기</td>
    <td>/signin</td>
    <td>`POST`</td>
    <td>loginId, password</td>
    <td>token : {userId, nickname, expiresIn}</td>
  </tr>
  <tr>
    <td rowspan="3">내용</td>
    <td>내용</td>
    <td>내용</td>
    <td>내용</td>
    <td>내용</td>
    <td>내용</td>
  </tr>
   <tr>
    <td>내용</td>
    <td>내용</td>
    <td>내용</td>
    <td>내용</td>
    <td>내용</td>
  </tr>
</table>

## 4.⚡ 기술스텍 및 라이브러리
| 종류 | 이름 |
|:---:|:---:|
| 개발 언어 | Javascript  |
| 데이터베이스 | MongoDB |
| 웹 프레임워크 | Express |
| JS Module | ESM |


| 라이브러리 | Appliance |
|:---:|:---:|
| React | Front |
| dotenv | 포트값외 중요한값 보안처리 |
| jsonwebtoken | 암호화 |
| Mongoose | MongoDB 데이터 모델링 |
| Cors | Request Resource 제한 |
| Multer | multipart/form-data 헨들링 |
| Socket.io | Chat and Notification |
