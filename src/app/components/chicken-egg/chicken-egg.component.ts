import { Component, Input } from "@angular/core";

@Component({
  selector: "chicken-egg",
  templateUrl: "./chicken-egg.component.html",
  styleUrls: [ './chicken-egg.component.scss' ]
})
export class ChickenEggComponent {
  data: string[] = ["🥚", "🐔"];
  showAnswer: boolean = false;
  tellMeTheAnswer() {
    this.data.sort();
    this.showAnswer = true;
  }

  code: string = 
` data: string[] = ["🥚", "🐔"];

  tellMeTheAnswer() {
    this.data.sort();
    this.showAnswer = true;
  }`;

  startAgain(){
     this.showAnswer = false;
     this.data = ["🥚", "🐔"];
  }
}
