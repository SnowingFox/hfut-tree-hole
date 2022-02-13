import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findUser(studentId: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { studentId } })
    if (!user) {
      return false
    }
    return user
  }

  async createUser() {

  }

  async preloadUserById() {}
}
