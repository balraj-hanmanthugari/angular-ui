import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [UserHomeComponent],
  imports: [CommonModule, FormsModule, MaterialModule, SharedModule]
})
export class UserHomeModule {}
