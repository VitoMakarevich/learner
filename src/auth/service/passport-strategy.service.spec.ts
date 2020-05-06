import { Test, TestingModule } from '@nestjs/testing';
import { PassportStrategyService } from './passport-strategy.service';

describe('PassportStrategyService', () => {
  let service: PassportStrategyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassportStrategyService],
    }).compile();

    service = module.get<PassportStrategyService>(PassportStrategyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
