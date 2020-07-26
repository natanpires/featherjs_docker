import app from '../../src/app';

describe('\'sales\' service', () => {
  it('registered the service', () => {
    const service = app.service('sales');
    expect(service).toBeTruthy();
  });
});
