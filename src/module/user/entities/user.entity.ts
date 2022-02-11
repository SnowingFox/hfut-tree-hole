import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  studentId: string

  @Column()
  password: string

  @Column()
  username: string

  @Column()
  createTime: Date

  @Column()
  updateTime: Date

  @Column()
  lastIp: string
}
