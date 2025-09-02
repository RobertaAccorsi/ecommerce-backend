import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { City } from "../cities/entities/city.entities";


@Entity('customer')
export class Customer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length: 60, nullable: false})
    name: string;
    
    @Column({length: 250, nullable: true})
    adress: string;

    @Column({length: 8, nullable: true})
    zipcode: string; 

    @ManyToOne(()=>City, {eager: true, nullable: false})
    city: City;

 
}