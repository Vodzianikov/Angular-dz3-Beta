import { Component } from '@angular/core';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent {
  Obj1 = {
    Название:"Утро в сосновом лесу",
    год_создания:"1889г.",
    автор:"Иван Шишкин,Константин Савицкий",
    размеры: "139 × 213 см",
    местоположение:"Москва"
  }
}
