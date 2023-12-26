import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

@Entity({
      name: 'transaction'
})
export class CalculateExchange {

      @PrimaryGeneratedColumn()
      id: number;

      @Column({ type: 'decimal', precision: 10, scale: 2 })
      amount: number;

      @Column()
      currencyFrom: string;

      @Column()
      currencyTo: string;

      @Column({ type: 'decimal', precision: 10, scale: 2 })
      exchangedAmount: number;

      @Column({ type: 'decimal', precision: 10, scale: 4 })
      exchangeRate: number;

      @Column({
            type: 'datetime',
            default: () => 'CURRENT_TIMESTAMP'
      })
      created_at: Date;

      @Column({
            type: 'datetime',
            default: () => 'CURRENT_TIMESTAMP'
      })
      updated_at: Date;

}