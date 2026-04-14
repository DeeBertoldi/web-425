import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="players-container">
      <div class="player" *ngFor="let player of players">
        <h3>{{ player.name }}</h3>
        <p>Class: {{ player.class }}</p>
        <p>Faction: {{ player.faction }}</p>
      </div>
    </div>
  `,
  styles: [`
    .players-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .player {
      width: 30%;
      margin: 10px;
      padding: 10px;
      border: 1px solid #00ffcc;
      border-radius: 8px;
      background-color: #111;
      color: #00ffcc;
      text-align: center;
    }
  `]
})
export class PlayersComponent {

  players = [
    {
      name: "Daft Ronin",
      gender: "Other",
      class: "Mage",
      faction: "Neon Circuit",
      startingLocation: "Paris Grid",
      funFact: "Speaks only through vocoders"
    },
    {
      name: "Freddy Mercuryon",
      gender: "Male",
      class: "Warrior",
      faction: "Royal Choir",
      startingLocation: "Wembley Arena",
      funFact: "Voice can shatter armor"
    },
    {
      name: "Bjorka",
      gender: "Female",
      class: "Mage",
      faction: "Nature Pulse",
      startingLocation: "Icelandic Forest",
      funFact: "Controls sound waves through emotion"
    },
    {
      name: "Jimi Hex",
      gender: "Male",
      class: "Rogue",
      faction: "Electric Voodoo",
      startingLocation: "Purple Realm",
      funFact: "Summons lightning with guitar riffs"
    },
    {
      name: "Nina Soulfire",
      gender: "Female",
      class: "Mage",
      faction: "Deep Frequencies",
      startingLocation: "Midnight Club",
      funFact: "Can control minds with low tones"
    },
    {
      name: "Kurt Static",
      gender: "Male",
      class: "Warrior",
      faction: "Grunge Rebellion",
      startingLocation: "Seattle Ruins",
      funFact: "Thrives in chaos and distortion"
    },
    {
      name: "Aphex Phantom",
      gender: "Other",
      class: "Rogue",
      faction: "Warp Signal",
      startingLocation: "Glitch Dimension",
      funFact: "Can manipulate time signatures"
    },
    {
      name: "Armin Pulse",
      gender: "Male",
      class: "Mage",
      faction: "Trance Order",
      startingLocation: "Euphoria Fields",
      funFact: "Controls crowd energy waves"
    },
    {
      name: "Missy Byte",
      gender: "Female",
      class: "Rogue",
      faction: "Digital Queens",
      startingLocation: "Cyber City",
      funFact: "Moves faster than data packets"
    },
    {
      name: "Prince Nova",
      gender: "Other",
      class: "Warrior",
      faction: "Purple Dynasty",
      startingLocation: "Neon Palace",
      funFact: "Switches styles mid-battle"
    }
  ];

}
