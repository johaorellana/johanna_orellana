import { Controller, Get, Post } from '@nestjs/common';
import { get } from 'http';
import { EmployeeService } from './employee.service';

@Controller('/api/edi')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}


    @Get()
    getEmployee():string {
        return this.employeeService.obtenerEmpleados()
    }

    @Post()
    postEmployee():string{
        return this.employeeService.crearEmpleado()
    }
    }

