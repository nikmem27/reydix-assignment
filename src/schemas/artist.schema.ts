import { z } from 'zod';
import { buildJsonSchemas } from 'fastify-zod';

const createArtistCoreSchema = {
  name: z.string(),
  email: z.string().email(),
};

const createArtistSchema = z
  .object({
    ...createArtistCoreSchema,
  })
  .strict();

const createArtistResponseSchema = z.object({
  id: z.string(),
  ...createArtistCoreSchema,
  events: z.array(z.object({})),
});

export type CreateArtistInput = z.infer<typeof createArtistSchema>;

export const { schemas: artistSchemas, $ref } = buildJsonSchemas(
  {
    createArtistSchema,
    createArtistResponseSchema,
  },
  { $id: 'ArtistSchema' },
);
