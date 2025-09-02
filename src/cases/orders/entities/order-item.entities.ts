import { Customer } from "src/cases/Customers/customer.entity";
import { Product } from "src/cases/products/product.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { order } from "./order.entities";


@Entity('order-item')
export class OrderItem {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => order)
    order: order

    @ManyToOne(() => Product, {eager: true, nullable:false})
    product: Product; 

    @Column({nullable: false})
    quantity: number;
    
    @Column('decimal', {nullable:true, precision: 10, scale:2})
    value: number;

}
