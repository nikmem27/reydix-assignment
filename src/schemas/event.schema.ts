import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const createEventCoreSchema = {
  name: z.string(),
  location: z.string(),
  startDate: z.string().datetime(),
  endDate: z.date(),
};

const createEventSchema = z
  .object({
    ...createEventCoreSchema,
  })
  .strict();

const createEventResponseSchema = z.object({
  id: z.string(),
  ...createEventCoreSchema,
});

export type CreateEventInput = z.infer<typeof createEventSchema>;

export const { schemas: eventSchemas, $ref } = buildJsonSchemas(
  {
    createEventSchema,
    createEventResponseSchema,
  },
  { $id: 'EventSchema' },
);
