import { Injectable } from '@nestjs/common';

@Injectable()
export class RacingService {

    obtenerEquipo():string{
        return 'Aguante Racing'
    }

    crearEquipo():string{
        return'Equipo creado ok'
    }
}
