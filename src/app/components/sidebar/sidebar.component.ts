import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('enterLeaveAnimation', [
      state('open', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(-100%)' })),
      transition('open => closed', animate('300ms ease-in-out')),
      transition('closed => open', animate('300ms ease-in-out')),
    ]),
  ],
})
export class SidebarComponent {
  open: boolean = false;

}
