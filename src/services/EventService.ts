import prisma from '../utils/prisma';
import { Event } from '@prisma/client';
import { CreateEventInput } from '../schemas/event.schema';

export class EventService {
  async create(input: CreateEventInput): Promise<Event> {
    const event = await prisma.event.create({
      data: input,
      include: {
        artists: true,
      },
    });
    return event;
  }
}
