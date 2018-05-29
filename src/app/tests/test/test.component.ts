import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  thenBlock: TemplateRef<any>|null = null;
  show: boolean = true;
  x: number = 10;

  constructor(){}

  ngOnInit() {
    this.thenBlock = this.primaryBlock;

    // Тесты методов для работы с arr
    let str = ['a','b','c'];
    let num = [10,14,20,25,18];
    this.jsArrTest(str,num);
  }

  @ViewChild('primaryBlock')
  primaryBlock: TemplateRef<any>|null = null;

  @ViewChild('secondaryBlock')
  secondaryBlock: TemplateRef<any>|null = null;

  switchPrimary() {
    this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
  }

  public jsArrTest(str , num){
    console.log(...str);  //Оператор расширения
    console.log(...num);  //Оператор расширения
    console.log('includes:'+str.includes('c')); //true
    console.log('some:'+num.some((number) => number >= 18));  //true
    console.log('every:'+num.every((number) => number >= 18)); //false
    console.log('filter:'+num.filter((number) => number >= 20));
    console.log('reduce:'+num.reduce((first,last) => first + last));
    console.log('map:'+num.map((number) => number*0.5));
  }
}
