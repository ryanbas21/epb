import { Component } from '@angular/core';

@Component({
  selector: 'graph',
  template: `<img src='./img/graph' />`
})

export class Graph {
public fullPath:string;

getMyPicture(){
   this.fullPath = "img/" + "graph.png" ;
 }
}
