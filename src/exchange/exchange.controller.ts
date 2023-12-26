import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ExchangeService } from './exchange.service';
import { Exchange } from './exchange.entity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Exchange')
@Controller('exchange')
export class ExchangeController {
      constructor(private readonly exchangeService: ExchangeService) {}

      @Get(':currencyFrom/:currencyTo')
      @ApiOperation({
            description: 'Obtener tipo de cambio'
      })
      async getExchange(
            @Param('currencyFrom') currencyFrom: string,
            @Param('currencyTo') currencyTo: string,
      ): Promise<number> {
            return this.exchangeService.getExchange(currencyFrom, currencyTo);
      }

      @Post()
      @ApiOperation({
            description: 'Crear tipo de cambio'
      })
      @ApiBody({
            description: '',
            type: Exchange
      })
      async createOrUpdateExchange(
                  @Body() exchangeData: Exchange
            ): Promise<Exchange> {
            return this.exchangeService.createOrUpdateExchange(exchangeData);
      }
}
