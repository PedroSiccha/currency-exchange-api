import { Module } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { ExchangeController } from './exchange.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exchange } from './exchange.entity';
import { CalculateExchangeService } from 'src/calculate-exchange/calculate-exchange.service';

@Module({
  imports: [TypeOrmModule.forFeature([Exchange])],
  providers: [ExchangeService],
  controllers: [ExchangeController]
})
export class ExchangeModule {}
