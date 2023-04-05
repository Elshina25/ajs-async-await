import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const readData = await read();
    const parseData = await json(readData);
    return new GameSaving(JSON.parse(parseData));
  }
}
