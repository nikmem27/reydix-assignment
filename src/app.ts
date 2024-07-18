import Fastify, { FastifyServerOptions } from 'fastify';
import artistRoutes from './routes/artistRoutes';
import eventRoutes from './routes/eventRoutes';
import { artistSchemas } from './schemas/artist.schema';
import { eventSchemas } from './schemas/event.schema';

export const build = (options: FastifyServerOptions) => {
  const fastify = Fastify(options);
  for (const schema of [...artistSchemas, ...eventSchemas]) {
    fastify.addSchema(schema);
  }

  fastify.register(artistRoutes, { prefix: '/artists' });
  fastify.register(eventRoutes, { prefix: '/events' });
  return fastify;
};
