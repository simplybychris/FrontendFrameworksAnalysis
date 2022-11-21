import {Component, OnInit, VERSION} from '@angular/core';

interface Data {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  data: Array<Data> = [];
  id: number = 1;

  constructor() {
    this.title = 'Angular ' + VERSION.full;
    this.data = this.generateData(100);
  }

  _random(max: number) {
    return Math.round(Math.random() * 1000) % max;
  }

  generateData(count: number = 1000): Array<Data> {
    let adjectives = ['elegant', 'coherent', 'comprehensive', 'like', 'ragged', 'organic', 'ambiguous', 'wiry', 'clever', 'violet'];
    let items = ['toothpick', 'phone', 'computer', 'hat', 'socks', 'car', 'shirt', 'rock', 'pad', 'paper'];
    const data: Array<Data> = [];
    for (let i = 0; i < count; i++) {
      data.push({
        id: this.id,
        name: adjectives[this._random(adjectives.length)] + " " + items[this._random(items.length)]
      });
      this.id++;
    }
    return data;
  }

  ngOnInit(): void {
  }

  append() {
    for (let i = 0; i < 10; i++) {
      const id = this._random(this.data.length);
      this.data.splice(id, 0, ...this.generateData(100))
    }
  }

  update() {
    for (let i = 0; i < this.data.length; i += 5) {
      this.data[i].name = 'updated ' + this.data[i].name;
    }
  }

  createThousandRows() {
    this.data = this.data.concat(this.generateData(1000));
  }

  createTenThousandRows() {
    this.data = this.data.concat(this.generateData(10000));
  }

  remove() {
    for (let i = 0; i < this.data.length; i += 5) {
      this.data.splice(i, 1);
    }
  }

  clear() {
    this.data = [];
  }
}
