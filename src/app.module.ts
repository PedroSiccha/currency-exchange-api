import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { sign } from 'crypto';
import { jwtConstants } from './auth/jwt.constants';
import { JwtStrategy } from './auth/jwt.strategy';
import { CalculateExchangeModule } from './calculate-exchange/calculate-exchange.module';
import { ExchangeModule } from './exchange/exchange.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'currency-exchange-db',
        entities: [
            __dirname + '/**/*.entity{.ts,.js}',
        ],
        synchronize: true,
    }),
    UsersModule,
    AuthModule,
    CalculateExchangeModule,
    ExchangeModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
