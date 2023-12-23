import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
      name: 'users'
})
export class User {

      @PrimaryGeneratedColumn()
      id: number;

      @Column()
      name: string;

      @Column({
            unique: true
      })
      email: string;

      @Column()
      password: string;

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