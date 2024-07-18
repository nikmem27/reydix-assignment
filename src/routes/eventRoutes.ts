import { FastifyInstance, FastifyRequest } from 'fastify';
import { CreateEventHandler } from '../handlers';
import { $ref, CreateEventInput } from '../schemas/event.schema';

async function eventRoutes(server: FastifyInstance) {
  server.post(
    '/',
    {
      schema: {
        body: $ref('createEventSchema'),
        response: {
          201: $ref('createEventResponseSchema'),
        },
      },
    },
    (request: FastifyRequest<{ Body: CreateEventInput }>, reply) => {
      new CreateEventHandler(request, reply).getResponse();
    },
  );
}

export default eventRoutes;
