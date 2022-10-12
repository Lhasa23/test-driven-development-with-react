import * as path from 'path'

const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, `db.test.json`))
const middlewares = jsonServer.defaults()

server.use((req: any, res: any, next: any) => {
	if (req.method === 'DELETE' && req.query['_cleanup']) {
		const db = router.db
		db.set('books', []).write()
		res.sendStatus(204)
	} else {
		next()
	}
})

server.use(middlewares)
server.use(router)

server.listen(8998, () => {
	console.log('JSON Server is running')
})