import { FastifyInstance, FastifyRequest } from 'fastify';
import { CreateArtistHandler } from '../handlers';
import { $ref, CreateArtistInput } from '../schemas/artist.schema';

async function artistRoutes(server: FastifyInstance) {
  server.post(
    '/',
    {
      schema: {
        body: $ref('createArtistSchema'),
        response: {
          201: $ref('createArtistResponseSchema'),
        },
      },
    },
    (request: FastifyRequest<{ Body: CreateArtistInput }>, response) => {
      new CreateArtistHandler(request, response).getResponse();
    },
  );
}

export default artistRoutes;
