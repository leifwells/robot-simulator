import { Injectable } from '@angular/core';
import { GameData } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  activeTile: GameData | null = null;
  gameData: Array<GameData> = [];

  constructor() {}

  initGameData(): Array<GameData> {
    return [
      { x: 0, y: 4, direction: 'north', isActive: false },
      { x: 1, y: 4, direction: 'north', isActive: false },
      { x: 2, y: 4, direction: 'north', isActive: false },
      { x: 3, y: 4, direction: 'north', isActive: false },
      { x: 4, y: 4, direction: 'north', isActive: false },

      { x: 0, y: 3, direction: 'north', isActive: false },
      { x: 1, y: 3, direction: 'north', isActive: false },
      { x: 2, y: 3, direction: 'north', isActive: false },
      { x: 3, y: 3, direction: 'north', isActive: false },
      { x: 4, y: 3, direction: 'north', isActive: false },

      { x: 0, y: 2, direction: 'north', isActive: false },
      { x: 1, y: 2, direction: 'north', isActive: false },
      { x: 2, y: 2, direction: 'north', isActive: false },
      { x: 3, y: 2, direction: 'north', isActive: false },
      { x: 4, y: 2, direction: 'north', isActive: false },

      { x: 0, y: 1, direction: 'north', isActive: false },
      { x: 1, y: 1, direction: 'north', isActive: false },
      { x: 2, y: 1, direction: 'north', isActive: false },
      { x: 3, y: 1, direction: 'north', isActive: false },
      { x: 4, y: 1, direction: 'north', isActive: false },

      { x: 0, y: 0, direction: 'north', isActive: false },
      { x: 1, y: 0, direction: 'north', isActive: false },
      { x: 2, y: 0, direction: 'north', isActive: false },
      { x: 3, y: 0, direction: 'north', isActive: false },
      { x: 4, y: 0, direction: 'north', isActive: false },
    ];
  }

  getGameData(): Array<GameData> {
    if (this.gameData.length === 0) {
      this.gameData = this.initGameData();
    }
    return this.gameData;
  }

  activateTile(x: number, y: number): void {
    this.setActiveTile(x, y);
    if (this.activeTile) {
      console.log(
        `PLACE ${this.activeTile.x},${
          this.activeTile.y
        },${this.activeTile.direction.toUpperCase()}`
      );
    }
  }

  setActiveTile(x: number, y: number): void {
    let found: GameData | null =
      this.gameData.find((tile) => tile.x === x && tile.y === y) ?? null;
    if (found) {
      found.isActive = true;
      if (this.activeTile) {
        found.direction = this.activeTile.direction;
        this.activeTile.isActive = false;
      } else {
        found.direction = 'north';
      }
      this.activeTile = found;
      this.activeTile.isActive = true;
    }
  }

  rotateRobot(rotationDirection: string): void {
    if (this.activeTile) {
      let direction = this.activeTile.direction;
      if (rotationDirection === 'left') {
        switch (direction) {
          case 'north':
            this.activeTile.direction = 'west';
            break;
          case 'west':
            this.activeTile.direction = 'south';
            break;
          case 'south':
            this.activeTile.direction = 'east';
            break;
          case 'east':
            this.activeTile.direction = 'north';
            break;
        }
      } else {
        switch (direction) {
          case 'north':
            this.activeTile.direction = 'east';
            break;
          case 'east':
            this.activeTile.direction = 'south';
            break;
          case 'south':
            this.activeTile.direction = 'west';
            break;
          case 'west':
            this.activeTile.direction = 'north';
            break;
        }
      }
    }
  }

  moveRobot(): void {
    if (this.activeTile) {
      let x = this.activeTile.x;
      let y = this.activeTile.y;
      let direction = this.activeTile.direction;
      switch (direction) {
        case 'north':
          if (y !== 4) {
            y = y + 1;
          }
          break;
        case 'east':
          if (x !== 4) {
            x = x + 1;
          }
          break;
        case 'south':
          if (y !== 0) {
            y = y - 1;
          }
          break;
        case 'west':
          if (x !== 0) {
            x = x - 1;
          }
          break;
      }
      if (x !== this.activeTile.x || y !== this.activeTile.y) {
        this.setActiveTile(x, y);
        console.log(`MOVE`);
      }
    }
  }

  makeReport(): void {
    if (this.activeTile) {
      console.log('REPORT');
      console.log(
        `Output: ${this.activeTile.x},${
          this.activeTile.y
        }, ${this.activeTile.direction.toUpperCase()}`
      );
    }
  }
}
