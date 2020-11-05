import * as express from 'express';

import { UserController } from './user.controller';

const app: express.Application = express();
const port: number = 3000;

const userController: UserController = new UserController();
app.use('/api/v1/users/:username', (request, response, next) => userController.getUser(request, response, next));

app.listen(port, () => {
  console.log(`Server running at http://localhost:"${port}".`);
});
