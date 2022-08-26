import app from './app';


const port = process.env.EMPLOYEE_SVC_PORT;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

export default server;