import { build } from './app';

const app = build({ logger: true });

const port = Number(process.env.PORT || 8080);
const start = async () => {
  try {
    const address = await app.listen({ port, host: '0.0.0.0' });
    console.log(`Server listening at ${address}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
