const express = require('express');
const server = express();
const userRouter = require('./routes/user/user.routes');

server.use(express.json());
server.use('/user',userRouter);




server.listen(3001,()=>{
   console.log('Server listening on port 3001');
});

