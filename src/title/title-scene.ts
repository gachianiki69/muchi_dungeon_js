import * as Phaser from 'phaser';

export default class TitleScene extends Phaser.Scene {
    titleText: Phaser.GameObjects.Text | null = null;

    constructor() {
        super(
            {
                key: 'Title'
            }
        );
    }

    create(): void {
        this.createTitle();
        this.createMenu();
    }

    createTitle(): void {
        const TITLE_X: integer = 400;
        const TITLE_Y: integer = 200;
        const TITLE_LABEL: string = 'むちダンジョン！';
        const TITLE_STYLE: Phaser.Types.GameObjects.Text.TextStyle = {
            fontSize: '64px'
        };

        this.titleText = this.add.text(TITLE_X, TITLE_Y, TITLE_LABEL, TITLE_STYLE).setOrigin(0.5);
    }

    createMenu(): void {
    }
}
