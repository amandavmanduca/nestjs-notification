## This is a Nest.js Project

Project developed during Ignite Lab week by https://www.rocketseat.com.br/

### Technologies
- JavaScript https://www.javascript.com/
- TypeScript https://www.typescriptlang.org/
- NestJS https://nestjs.com/
- Prisma https://www.prisma.io/
- Jest https://jestjs.io/


### How to run the project:

- Installing dependencies
`npm install`

- Running project
`nest start`

- Running Prisma studio
`npx prisma studio`


### Create one notification
`POST`: http://localhost:3000/notifications/create
```
{
	"recipientId": $recipientId,
	"category": "category name",
	"content": "content info"
}
```

### Cancel one notification
`PATCH` http://localhost:3000/notifications/$notificationId/cancel/
