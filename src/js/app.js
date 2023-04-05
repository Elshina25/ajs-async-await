import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const saving = await GameSavingLoader.load();
    return saving;
  } catch (e) {
    return e;
  }
})();
