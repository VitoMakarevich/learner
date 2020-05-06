import { Test, TestingModule } from '@nestjs/testing'
import { UserService } from './user.service'
import { MockType } from '../../common/types'
import { Repository } from 'typeorm'
import { User } from '../entity/user.entity'
import faker from 'faker'
import { getRepositoryToken } from '@nestjs/typeorm'

describe('AuthService', () => {
  let service: UserService
  let repositoryMock: MockType<Repository<User>>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useFactory: () => ({
            findOne: jest.fn(entity => entity),
          }),
        },
      ],
    }).compile()

    repositoryMock = module.get<MockType<Repository<User>>>(getRepositoryToken(User))
    service = module.get<UserService>(UserService)
  })

  describe('validate', () => {
    it('should throw error in case user not found', async () => {
      const request = {
        login: faker.random.word(),
        password: faker.random.uuid()
      }
      repositoryMock.findOne.mockImplementation(() => undefined)

      await expect(service.validate(request)).toBeNull()
      expect(repositoryMock.findOne).toBeCalledWith({
        where: {
          name: request.login,
        },
        select: ['id', 'name', 'password'],
      })
    })

    it('should throw error in case invalid password', async () => {
      const request = {
        login: faker.random.word(),
        password: faker.random.uuid()
      }
      repositoryMock.findOne.mockImplementation(async () => ({
        id: faker.random.number(),
        name: request.login,
        password: faker.random.uuid()
      }))

      await expect(service.validate(request)).toBeNull()
    })
  })
})
