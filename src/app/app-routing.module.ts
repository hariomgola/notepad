import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteInputComponent } from './note-input/note-input.component';

const routes: Routes = [{ path: '', component: NoteInputComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const ApplicationRoutingModule = [NoteInputComponent];
