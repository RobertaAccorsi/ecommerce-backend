import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Order } from "./entities/order.entities";
import { OrderItem } from "./entities/order-item.entities";
import { OrderService } from "../Customers/service/order.service";
import { OrderItemService } from "../Customers/service/order-item.service";
import { OrderController } from "./controller/order.controller";
import { OrderItemController } from "./controller/order-item.controller";
import { CustomerModule } from "../Customers/customer.module";




@Module({
    imports:[TypeOrmModule.forFeature([Order, OrderItem]),
    CustomerModule
],
    providers: [OrderService, OrderItemService],
    controllers: [OrderController, OrderItemController]
})
export class OrderModule {}