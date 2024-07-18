import prisma from '../utils/prisma';
import { Artist } from '@prisma/client';
import { CreateArtistInput } from '../schemas/artist.schema';

export class ArtistService {
  async create(input: CreateArtistInput): Promise<Artist> {
    const artist = await prisma.artist.create({
      data: input,
      include: {
        events: true,
      },
    });
    return artist;
  }
}
