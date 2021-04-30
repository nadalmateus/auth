import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity('user')
class Users {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string

  constructor () {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export default Users
