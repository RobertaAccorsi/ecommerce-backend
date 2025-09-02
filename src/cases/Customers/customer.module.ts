import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { CostumerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { Customer } from "./customer.entity";


@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomerService],
  controllers: [CostumerController],
})
export class CustomerModule {}