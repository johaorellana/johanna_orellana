import { Controller, Get, Post } from '@nestjs/common';
import { RacingService } from './racing.service';

@Controller('aguanteracing')
export class RacingController {
    constructor(private readonly racingService: RacingService) {}

    @Get()
    getRacing():string{
        return this.racingService.obtenerEquipo()
    }

    @Post()
    postRacing():string{
        return this.racingService.crearEquipo()
    }
}
