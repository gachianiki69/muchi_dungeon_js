import * as Phaser from 'phaser';
import Scenes from './scenes';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    resolution: window.devicePixelRatio,
    parent: 'game-app',
    scene: Scenes
};

var game = new Phaser.Game(config);
