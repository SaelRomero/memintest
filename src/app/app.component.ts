import { Component } from '@angular/core';
import questions from '../json/family-medical-history.json';
import { ElementType, Page, Pages } from './models/pagesModel';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'memintest';
  data: Pages;
  pages: Page[];
  activePage: Page;
  indexPage: number;


  constructor() {
    this.data = questions as Pages;
    this.pages = this.data.pages;
    this.activePage = this.pages[0]
    this.indexPage = this.pages.indexOf(this.activePage);



  }

  public get ElementType() {
    return ElementType;
  }

  nextPage() {
    this.indexPage++;
    this.activePage = this.pages[this.indexPage];
    this.scrollToTop();

  }

  previousPage() {
    this.indexPage--;
    this.activePage = this.pages[this.indexPage];
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  stringToHTML(str: string | undefined) {
    if (!str) {
      return '';
    }
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };
}
