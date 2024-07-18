import { FastifyReply, FastifyRequest } from 'fastify';
import { ArtistService } from '../../services';
import { CreateArtistInput } from '../../schemas/artist.schema';

export class CreateArtistHandler {
  constructor(
    public readonly request: FastifyRequest<{
      Body: CreateArtistInput;
    }>,
    public readonly reply: FastifyReply,
    protected readonly service: ArtistService = new ArtistService(),
  ) {}

  public async getResponse(): Promise<FastifyReply> {
    const body = this.request.body;

    try {
      const artist = await this.service.create(body);

      return this.reply.code(201).send(artist);
    } catch (e) {
      console.log(e);
      return this.reply.code(500).send(e);
    }
  }
}

/*
export async function createArtistHandler(
    request: FastifyRequest<{
        Body: CreateArtistInput;
    }>,
    reply: FastifyReply,
) {
    const body = request.body;

    try {
        const artist = await createArtist(body);

        return reply.code(201).send(artist);
    } catch (e) {
        console.log(e);
        return reply.code(500).send(e);
    }
}*/
