import { Routes } from '@angular/router';
import { RobotComponent } from './robot/robot.component';

export const routes: Routes = [
  { path: '', redirectTo: '/robot', pathMatch: 'full' },
  { path: 'robot', component: RobotComponent },
];
