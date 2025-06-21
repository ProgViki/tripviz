import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TripService {
  constructor(private prisma: PrismaService) {}

  create(data: { pickup: string; destination: string; userId: string }) {
    return this.prisma.trip.create({ data });
  }

  getUserTrips(userId: string) {
    return this.prisma.trip.findMany({ where: { userId } });
  }
}