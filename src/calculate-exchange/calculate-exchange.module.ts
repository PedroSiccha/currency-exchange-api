import { Module } from '@nestjs/common';
import { CalculateExchangeService } from './calculate-exchange.service';
import { CalculateExchangeController } from './calculate-exchange.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExchangeService } from 'src/exchange/exchange.service';
import { CalculateExchange } from './calculate-exchange.entity';
import { Exchange } from 'src/exchange/exchange.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CalculateExchange, Exchange])],
  providers: [CalculateExchangeService, ExchangeService],
  controllers: [CalculateExchangeController]
})
export class CalculateExchangeModule {}
