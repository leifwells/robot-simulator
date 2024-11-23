import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileComponent } from './tile.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileComponent, MatIconModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    component.tileData = {
      x: 0,
      y: 0,
      direction: 'north',
      isActive: false,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
