const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const server = express();
const userRouter = require('./routes/user/user.routes');


server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(compression());

server.use('/user',userRouter);



server.listen(3001,()=>{
   console.log('Server listening on port 3001');
});

