import * as PIXI from "pixi.js";
import { line3x5_20 } from "../config";

export default class BetLine extends PIXI.Container {
    constructor() {
        super();
        this._init();
    }

    _init(): void {
        const fix = this.calculateFix(line3x5_20);
        const points = this._createPath(line3x5_20, fix);
        const box = this._createLine(points);
        this.addChild(box);
    }

    calculateFix(line: string[][]): number[] {
        const hashTable = new Map();
        return [...line].map((array) => {
            array.forEach((value) => {
                if (!hashTable.has(value)) {
                    return hashTable.set(value, 1);
                }
                hashTable.set(value, hashTable.get(value) + 1);
            });
            const max = Math.max(...hashTable.values());
            return max * 12;
        });
    }

    _createPath(lineList: string[][], fixYArray: number[]): PIXI.Point[][] {
        const intervalX = 200;
        const intervalY = 200;
        return lineList.map((lineGrids, i) => {
            const fixY = fixYArray[i] - Math.max(...fixYArray) / 2;
            // 路徑座標
            const pointArray = lineGrids.map((item) => {
                const grid = Number(item) - 1;
                const x = Math.floor(grid / 3) * intervalX;
                const y = (grid % 3) * intervalY + fixY;
                return { x, y };
            });
            // TODO: 補點寫法待優化
            const endPoint = [...pointArray].pop();
            const startPoint = [...pointArray][0];
            // 起始座標
            pointArray.unshift({ x: startPoint.x - 100, y: startPoint.y });
            // 終點座標
            pointArray.push({ x: endPoint.x + 100, y: endPoint.y });
            const limit = 50;
            const length = pointArray.length;
            // 對座標間隔進行補點
            for (let i = 0; i < length - 1; i++) {
                const { x: x0, y: y0 } = pointArray[i];
                const { x: x1, y: y1 } = pointArray[i + 1];
                for (let j = 1; j < limit; j++) {
                    const x = x0 + ((x1 - x0) * j) / limit;
                    const y = y0 + ((y1 - y0) * j) / limit;
                    pointArray.push({ x, y });
                }
            }
            pointArray.sort((a, b) => a.x - b.x);

            return pointArray as PIXI.Point[];
        });
    }

    _createLine(points: PIXI.Point[][]): PIXI.Container {
        return points.reduce((container, point) => {
            container.addChild(new PIXI.SimpleRope(PIXI.Texture.from("red"), point));
            return container;
        }, new PIXI.Container());
    }
}
