import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListDbzComponent {

  @Input()
  public characterList: Character[]=[{
    name: 'Trunks',
    power: 2500
  }
]

@Output()
public onDelete: EventEmitter<string> =  new EventEmitter();

onDeleteCharacter (id?: string): void{
  if (!id) return;
  console.log({id})
  this.onDelete.emit(id);
}
}
