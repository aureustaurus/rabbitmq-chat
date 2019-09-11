# rabbitmq-chat

Docker commands to run (manually):

// build image from local repositories:
- `cd server`
- `docker build -t express-server .`

// run containers:
- `docker run -d --hostname my-rabbit --name some-rabbit -p 5672:5672 -p 15672:15672 rabbitmq:3-management-alpine`
- `docker run -d --hostname my-rabbit --name express -p 3000:3000 express-server`
