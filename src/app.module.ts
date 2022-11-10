import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, EmployeeController],
  providers: [AppService, ProductsService, EmployeeService],
})
export class AppModule {}
