import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { TripService } from './trip.service';
import { JwtAuthGuard } from '../common/jwt-auth.guard';

@Controller('trips')
export class TripController {
  constructor(private tripService: TripService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: { pickup: string; destination: string }, @Req() req) {
    return this.tripService.create({ ...body, userId: req.user.userId });
  }

  @UseGuards(JwtAuthGuard)
  @Get('user')
  getUserTrips(@Req() req) {
    return this.tripService.getUserTrips(req.user.userId);
  }
}