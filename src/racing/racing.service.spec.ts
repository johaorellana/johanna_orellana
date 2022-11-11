import { Test, TestingModule } from '@nestjs/testing';
import { RacingService } from './racing.service';

describe('RacingService', () => {
  let service: RacingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RacingService],
    }).compile();

    service = module.get<RacingService>(RacingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
