import { TestBed } from '@angular/core/testing';
import { GameService } from './game.service';
import { GameData } from '../types/types';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize game data', () => {
    const gameData = service.initGameData();
    expect(gameData.length).toBe(25);
    expect(gameData[0]).toEqual({
      x: 0,
      y: 4,
      direction: 'north',
      isActive: false,
    });
  });

  it('should get game data', () => {
    const gameData = service.getGameData();
    expect(gameData.length).toBe(25);
  });

  it('should activate a tile', () => {
    service.getGameData();
    service.activateTile(2, 2);
    expect(service.activeTile).toEqual({
      x: 2,
      y: 2,
      direction: 'north',
      isActive: true,
    });
  });

  it('should rotate the robot to the left', () => {
    service.getGameData();
    service.activateTile(2, 2);
    service.rotateRobot('left');
    expect(service.activeTile?.direction).toBe('west');
  });

  it('should rotate the robot to the right', () => {
    service.getGameData();
    service.activateTile(2, 2);
    service.rotateRobot('right');
    expect(service.activeTile?.direction).toBe('east');
  });

  it('should move the robot', () => {
    service.getGameData();
    service.activateTile(2, 2);
    service.moveRobot();
    expect(service.activeTile).toEqual({
      x: 2,
      y: 3,
      direction: 'north',
      isActive: true,
    });
  });

  it('should make a report', () => {
    spyOn(console, 'log');
    service.getGameData();
    service.activateTile(2, 2);
    service.makeReport();
    expect(console.log).toHaveBeenCalledWith('REPORT');
    expect(console.log).toHaveBeenCalledWith('Output: 2,2, NORTH');
  });
});
