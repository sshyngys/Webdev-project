import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: '/card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  title = 'Laptop1';
  title2 = 'Laptop2';
  title3 = 'Laptop3';
  title4 = 'Laptop4';
  title5 = 'Laptop5';
  title6 = 'Laptop6';
  title7 = 'Laptop7';
  title8 = 'Laptop8';
  title9 = 'Laptop9';
  title10 = 'Laptop10';

  imgUrl = 'https://ants.kz/images/stories/virtuemart/product/64569166_0ret.jpg ';
  imgUrl2 = 'https://img.moyo.ua/img/products_desc/4485/448556_1568637124_5.jpg';
  imgUrl3 = 'https://images-na.ssl-images-amazon.com/images/I/61DrCbSkM4L._AC_SL1500_.jpg';
  imgUrl4 = 'https://images-na.ssl-images-amazon.com/images/I/714U9oCvrML._AC_SL1000_.jpg ';
  imgUrl5 = 'https://images-na.ssl-images-amazon.com/images/I/810gynDZHzL._AC_SL1500_.jpg ';
  imgUrl6 = 'https://images-na.ssl-images-amazon.com/images/I/51-oQftbqDL._AC_SL1000_.jpg ';
  imgUrl7 = 'https://images-na.ssl-images-amazon.com/images/I/613mdrUedHL._AC_SL1000_.jpg ';
  imgUrl8 = 'https://images-na.ssl-images-amazon.com/images/I/71c5W9NxN5L._AC_SL1500_.jpg ';
  imgUrl9 = 'https://images-na.ssl-images-amazon.com/images/I/71arQOG5qPL._AC_SL1500_.jpg ';
  imgUrl10 = 'https://images-na.ssl-images-amazon.com/images/I/717ywJDnAHL._AC_SL1500_.jpg';

  // tslint:disable-next-line:typedef
  ngOnInit(){
    setTimeout(() => {
      this.imgUrl = 'https://itproducts.kz/images/detailed/36/it_products_5GX12EA_ACB.jpg';
      this.imgUrl2 = 'https://9to5toys.com/wp-content/uploads/sites/5/2020/01/ASUS-VivoBook.jpg?quality=82&strip=all&w=1600';
      this.imgUrl3 = 'https://images-na.ssl-images-amazon.com/images/I/61oTbC2BP5L._AC_SL1500_.jpg';
      this.imgUrl4 = 'https://images-na.ssl-images-amazon.com/images/I/61pJEKHZT2L._AC_SL1000_.jpg';
      this.imgUrl5 = 'https://images-na.ssl-images-amazon.com/images/I/81p5wiXFHsL._AC_SL1500_.jpg';
      this.imgUrl6 = 'https://images-na.ssl-images-amazon.com/images/I/51-oQftbqDL._AC_SL1000_.jpg';
      this.imgUrl7 = 'https://images-na.ssl-images-amazon.com/images/I/81Z8NvO2TFL._AC_SL1500_.jpg';
      this.imgUrl8 = 'https://images-na.ssl-images-amazon.com/images/I/61sfTydsd1L._AC_SL1500_.jpg';
      this.imgUrl9 = 'https://images-na.ssl-images-amazon.com/images/I/81%2BeOzDR0RL._AC_SL1500_.jpg';
      this.imgUrl10 = 'https://images-na.ssl-images-amazon.com/images/I/81-oX6URIoL._AC_SL1500_.jpg';
    }, 3000);
  }

  getInfo(): string {
    return 'This is smthg info';
  }
}
