import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {

  cardTitle: string = 'abc'
  cardBody: string = 'lorem ipsum lorem ipsum lorem ipsum'
}
