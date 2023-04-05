import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';

test('load gameSaving json', async (done) => {
  const gameSaving = new GameSaving({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
  const result = await GameSavingLoader.load();
  expect(result).toEqual(gameSaving);
  done();
});
