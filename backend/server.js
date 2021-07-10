import server from './index.js'
import './chat.js'

server.listen(3000, () => {
	console.log('서버가 요청을 받을 준비가 됐어요')
})