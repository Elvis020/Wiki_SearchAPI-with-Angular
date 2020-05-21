import { WikipediaService } from './wikipedia.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];

  constructor(private wiki: WikipediaService) {

  }
  onTerm(term: string){
    this.wiki.search(term).subscribe( (pages) => {
      this.pages = pages;
    });
  }
}

// https://en.wikipedia.org/w/api.php?
//   action=query&
//   format=json&
//   list=ssearch&
//   utf8=1&
//   srsearch=space



