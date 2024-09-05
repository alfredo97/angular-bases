import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;

  public showChangeName: boolean = true;
  public showChangeAge: boolean = true;

  get getCapitlizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changerName(){
    this.name = 'Spiderman';
    this.showChangeName = false;
  }
  
  changeAge(){
    this.age = 30;
    this.showChangeAge = false;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
    this.showChangeName = true;
    this.showChangeAge = true;

    
  }

}
