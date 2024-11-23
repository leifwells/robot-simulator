import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GameData } from '../types/types';

@Component({
  selector: 'app-tile',
  imports: [CommonModule, MatIconModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css',
})
export class TileComponent {
  @Input() tileData: any;
  @Output() tileClicked = new EventEmitter<GameData>();

  isHovered = false;

  constructor() {}

  setActiveTile(data: GameData): void {
    this.tileClicked.emit(data);
  }
}
