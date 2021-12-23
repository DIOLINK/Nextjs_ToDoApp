### Images and Gifs

![Peek 23-12-2021 16-53](https://user-images.githubusercontent.com/54718297/147286474-722141ac-842c-4d78-b99f-8244fb318cc3.gif)

![image](https://user-images.githubusercontent.com/54718297/147286783-6c33f356-3283-4a45-b7ac-5c47700278cf.png)

![image](https://user-images.githubusercontent.com/54718297/147286882-eb3d98fd-a1a7-4a5b-bb4b-d6efd73a6e42.png)

![image](https://user-images.githubusercontent.com/54718297/147286902-113ecbae-492f-4de2-a93e-3f99c75dc222.png)

# With Docker

This examples shows how to use Docker with Next.js based on the [deployment documentation](https://nextjs.org/docs/deployment#docker-image).
## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run --env-file=$(pwd)/.env.local -v $(pwd)/src:/app/src -p 3000:3000 --name todo-app next-node-todosapp
`.

You can view your images created with `docker images`.

## Running Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
