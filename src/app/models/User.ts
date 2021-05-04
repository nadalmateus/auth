import { Column, Entity, PrimaryColumn, BeforeInsert, BeforeUpdate } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import bcryptjs from 'bcryptjs'

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string

  @BeforeInsert()
  @BeforeUpdate()
  cryptPassword () {
    this.password = bcryptjs.hashSync(this.password, 8)
  }

  constructor () {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export default User
