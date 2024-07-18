import { FastifyReply, FastifyRequest } from 'fastify';
import { EventService } from '../../services';
import { CreateEventInput } from '../../schemas/event.schema';

export class CreateEventHandler {
  constructor(
    public readonly request: FastifyRequest<{
      Body: CreateEventInput;
    }>,
    public readonly reply: FastifyReply,
    protected readonly service: EventService = new EventService(),
  ) {}

  public async getResponse(): Promise<FastifyReply> {
    const body = this.request.body;

    try {
      const event = await this.service.create(body);

      return this.reply.code(201).send(event);
    } catch (e) {
      return this.reply.code(500).send(2);
    }
  }
}

/*export async function createEventHandler(
  request: FastifyRequest<{
    Body: CreateEventInput;
  }>,
  reply: FastifyReply,
) {
  const body = request.body;

  try {
    const event = await createEvent(body);

    return reply.code(201).send(event);
  } catch (e) {
    reply.code(500).send(2);
  }
}*/
