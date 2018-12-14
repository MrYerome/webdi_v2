import { AccueilRoutingModule } from './accueil-routing.module';

describe('AccueilRoutingModule', () => {
  let accueilRoutingModule: AccueilRoutingModule;

  beforeEach(() => {
    accueilRoutingModule = new AccueilRoutingModule();
  });

  it('should create an instance', () => {
    expect(accueilRoutingModule).toBeTruthy();
  });
});
