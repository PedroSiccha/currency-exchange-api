import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
      name: 'exchange'
})
export class Exchange {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      currencyFrom: string;

      @Column()
      currencyTo: string;

      @Column({ type: 'decimal', precision: 10, scale: 4 })
      rate: number;

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