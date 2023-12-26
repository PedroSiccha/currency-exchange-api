import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exchange } from './exchange.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExchangeService {
      constructor(
            @InjectRepository(Exchange)
            private exchangeRepository: Repository<Exchange>,
          ) {}
        
      async getExchange(currencyFrom: string, currencyTo: string): Promise<number> {
            const exchangeRate = await this.exchangeRepository.findOneBy({ 
                  currencyFrom: currencyFrom, 
                  currencyTo: currencyTo 
            });
            return exchangeRate ? exchangeRate.rate : null;
      }

      async createOrUpdateExchange(exchangeData: Exchange): Promise<Exchange> {
            const { currencyFrom, currencyTo, rate } = exchangeData;
            let existingExchange = await this.exchangeRepository.findOne({
              where: {
                currencyFrom,
                currencyTo,
              },
            });
        
            if (existingExchange) {
                  existingExchange.rate = rate;
              return this.exchangeRepository.save(existingExchange);
            } else {
              const newExchangeRate = this.exchangeRepository.create({
                currencyFrom,
                currencyTo,
                rate,
              });
              return this.exchangeRepository.save(newExchangeRate);
            }
          }
}
