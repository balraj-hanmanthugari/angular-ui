import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { AppHeaderComponent } from '../layout/app-header/app-header.component';
import { AppMenuComponent } from '../layout/app-menu/app-menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserHomeComponent, AppHeaderComponent, AppMenuComponent],
  imports: [CommonModule, FormsModule]
})
export class UserHomeModule {}
