import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { State } from "../entities/states.entity";
import { StateService } from "./state.service";
import { CityService } from "./city.service";
import { StateController } from "../controller/state.controller";
import { City } from "../entities/city.entities";
import { CityController } from "../controller/city.controller";


@Module({
  imports: [TypeOrmModule.forFeature([State, City])],
  providers: [StateService, CityService],
  controllers: [StateController, CityController],
})
export class CityModule {}