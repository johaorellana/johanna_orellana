import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { RacingService } from './racing/racing.service';
import { RacingController } from './racing/racing.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, EmployeeController, RacingController],
  providers: [AppService, ProductsService, EmployeeService, RacingService],
})
export class AppModule {}
