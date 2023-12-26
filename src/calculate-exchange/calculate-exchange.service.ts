import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CalculateExchange } from './calculate-exchange.entity';
import { Repository } from 'typeorm';
import { ExchangeService } from 'src/exchange/exchange.service';

@Injectable()
export class CalculateExchangeService {
      constructor(
            @InjectRepository(CalculateExchange)
            private transactionRepository: Repository<CalculateExchange>,
            private exchangeService: ExchangeService,
          ) {}

      async calculateExchange(transaction: CalculateExchange): Promise<CalculateExchange> {
            const exchangeRate = await this.exchangeService.getExchange(transaction.currencyFrom, transaction.currencyTo);
      
            if (!exchangeRate) {
                  throw new Error('Tipo de cambio no encontrado para la moneda especificada.');
            }
      
            transaction.exchangeRate = exchangeRate;
            transaction.exchangedAmount = transaction.amount * exchangeRate;
      
            return this.transactionRepository.save(transaction);
      }
}
