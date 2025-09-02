import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './cases/categories/category.module';
import { BrandModule } from './cases/brands/brand.module';
import { Product } from './cases/products/product.entity';
import { ProductModule } from './cases/products/product.module';
import { ConfigModule } from '@nestjs/config';
import { CityModule } from './cases/cities/services/city.module';
import { Customer } from './cases/Customers/customer.entity';
import { CustomerModule } from './cases/Customers/customer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) ,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CategoryModule,
    BrandModule,
    ProductModule,
    CityModule,
    CustomerModule
    
  ],
})
export class AppModule {}
