import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CalculateExchangeService } from './calculate-exchange.service';
import { CalculateExchange } from './calculate-exchange.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Calculate Exchange')
@Controller('calculate-exchange')
export class CalculateExchangeController {
      constructor(private readonly calculateExchangeService: CalculateExchangeService) {}
      @Post('calculate-exchange')
      async calculateExchange(@Body() calculateExchange: CalculateExchange): Promise<CalculateExchange> {
            return this.calculateExchangeService.calculateExchange(calculateExchange);
      }
}
