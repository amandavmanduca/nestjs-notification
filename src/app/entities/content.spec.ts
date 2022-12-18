import { Content } from './content';

describe('Notification content', () => {
  it('it shoule be able to create a notification content', () => {
    const valid_content = new Content('Você criou uma notificação válida');

    expect(valid_content).toBeTruthy();
  });

  it('it shoule be able to create a notification content with less than 5 characteres', () => {
    const invalid_content = new Content('Ops');

    expect(invalid_content).toThrow();
  });

  it('it shoule be able to create a notification content with more than 240 characteres', () => {
    const invalid_content = new Content('a'.repeat(241));

    expect(invalid_content).toThrow();
  });
});
