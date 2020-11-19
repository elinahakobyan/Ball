import * as PIXI from 'pixi.js';
import { Box } from './box';

export class Game extends PIXI.Application {
    constructor() {
        super({
            backgroundColor: 0xcdcdcd,
            width: 800,
            height: 800,
        })

        this.boxEntryRotation = Math.PI * 0.25
        this.boxDistancePerFrame = 1

        document.body.appendChild(this.view);
        this.loadAssets()

    }

    loadAssets() {
        this.loader.add('box', 'assets/circle.png').load((loader, resources) => {
            this.createBox()
        });
    }

    createBox() {
        this.box = new Box(this)
        this.stage.addChild(this.box)
    }
}

new Game();