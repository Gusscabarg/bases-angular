import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[]= [{
    id: uuidv4(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuidv4(),
    name: 'Goku',
    power: 5000
  },{
    id: uuidv4(),
    name: 'Picoro',
    power: 3500
  }
];

addCharacter( character: Character): void{

  const newCharacter: Character={id: uuidv4(), ...character };
  this.characters.push(newCharacter);

}

// onDeleteCharacter(index: number){
//   this.characters.splice(index,1);
deleteCharacteById(id:string){
  this.characters=this.characters.filter(character => character.id !==id)
}

}
function uuid(): string | undefined {
  throw new Error('Function not implemented.');
}

