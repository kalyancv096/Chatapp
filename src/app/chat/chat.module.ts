import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ChatBoxComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'chat', component: ChatBoxComponent }
    ]),
    SharedModule
  ]
})
export class ChatModule { }
