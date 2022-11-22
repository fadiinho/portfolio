# Fadiinho's Portfolio

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Run and develop

1. Close the repository
2. Setup docker to make your development database.

```bash
docker run --name=portfolio -p 3306:3306 \
-e MYSQL_ROOT_HOST=% \
-e MYSQL_USER=root \
-e MYSQL_ROOT_PASSWORD=root \
-e MYSQL_DATABASE=portfolio \
-d mysql/mysql-server:latest
```

3. Rename `.env.example` to `.env`and fill all variables

4. Install dependencies with `yarn`
5. Run db migrations with `yarn prisma migrate dev`
6. Run `yarn dev` to start dev server

> All design credits go to [Elias](https://www.figma.com/@elias_dev)
