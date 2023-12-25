import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { hash } from 'bcrypt';

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

      @BeforeInsert()
      async hashPassword() {
            this.password = await hash(this.password, Number(process.env.HASH_SALT))
      }

}