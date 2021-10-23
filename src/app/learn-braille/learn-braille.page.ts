import { Component, OnInit } from '@angular/core';
import { BrailleService } from '../services/braille.service';



@Component({
  selector: 'app-learn-braille',
  templateUrl: './learn-braille.page.html',
  styleUrls: ['./learn-braille.page.scss'],
})
export class LearnBraillePage implements OnInit {

  constructor(private brailleS: BrailleService ) { }

  ngOnInit() {
  }

  test(){
this.brailleS.test();



}
  

 


}
