import { Test, TestingModule } from '@nestjs/testing';
import { RacingController } from './racing.controller';

describe('RacingController', () => {
  let controller: RacingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RacingController],
    }).compile();

    controller = module.get<RacingController>(RacingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
