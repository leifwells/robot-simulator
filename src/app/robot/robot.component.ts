import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TileComponent } from '../tile/tile.component';
import { GameData } from '../types/types';
import { GameService } from '../services/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-robot',
  imports: [CommonModule, MatButtonModule, MatIconModule, TileComponent],
  templateUrl: './robot.component.html',
  styleUrl: './robot.component.css',
})
export class RobotComponent {
  data: Array<GameData> = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.data = this.gameService.getGameData();
  }

  tileClicked(data: GameData): void {
    this.gameService.activateTile(data.x, data.y);
  }

  rotateLeft(): void {
    this.gameService.rotateRobot('left');
  }

  rotateRight(): void {
    this.gameService.rotateRobot('right');
  }

  moveRobot(): void {
    this.gameService.moveRobot();
  }

  report(): void {
    this.gameService.makeReport();
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        this.moveRobot();
        break;
      case 'ArrowLeft':
        this.rotateLeft();
        break;
      case 'ArrowRight':
        this.rotateRight();
        break;
      case 'r':
        this.report();
        break;
    }
  }
}
