import * as express from 'express';

import { HelloWorldController } from './hello-world.controller';

const app: express.Application = express();
const port: number = 3000;

const userController: HelloWorldController = new HelloWorldController();
app.use('/api/hello-world', (request, response, next) => userController.getUser(request, response, next));

app.listen(port, () => {
  console.log(`Server running at "http://localhost:${port}".`);
});
