import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
    <h1>Rainbow Six Siege Operator Randomizer</h1>
    <button (click)="randomizeDefenders()">Randomize Defenders</button>
    <div *ngIf="teamType === 'defenders'">
      <div *ngFor="let defender of team">
        {{ defender }}
      </div>
    </div>
    <button (click)="randomizeAttackers()">Randomize Attackers</button>
    <div *ngIf="teamType === 'attackers'">
      <div *ngFor="let attacker of team">
        {{ attacker }}
        </div>
      </div>
    </div>
  `
  
})
export class AppComponent {

  title = 'SiegeApp';

  teamType = 'defenders';
  
  defenders = [    "Castle", "Pulse", "Rook", "Doc", "Kapkan", "Tachanka", "Smoke", "Mute", "Valkyrie", "Caveira", "Echo", "Mira", "Lesion", "Ela" ];
  attackers = [    "Test"];

  team: string[] = [];

  randomizeDefenders() {
    this.teamType = 'defenders'
    this.team = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * this.defenders.length);
      this.team.push(this.defenders[randomIndex]);
    }
  }

  randomizeAttackers() {
    this.teamType = 'attackers'
    this.team = [];
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * this.attackers.length);
      this.team.push(this.attackers[randomIndex]);
    }
  }
}

