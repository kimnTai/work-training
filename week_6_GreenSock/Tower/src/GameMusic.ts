import { Howl } from "howler";

/**
 * @description 各種遊戲音樂、音效
 * @class GameMusic
 */
class GameMusic {
  /**背景音樂 */
  static backgroundMusic = new Howl({
    src: [`../music/BATTLE.mp3`],
  });
  /**消除 Combo 音效 */
  static comboPlay(comboNumber: number, removeCount?: number): void {
    if (comboNumber > 10) {
      comboNumber = 10;
    }
    const srcArray = [];
    srcArray.push(`../music/sound_combo${comboNumber}.mp3`);
    const sound = new Howl({
      src: srcArray,
    });
    sound.play();
  }
}

export { GameMusic };
