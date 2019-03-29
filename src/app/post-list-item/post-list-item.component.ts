import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

    // déclare les variable de configuration du Component
    @Input() title: string;
    @Input() content: string;
    @Input() loveIts: number;
    @Input() created_at: Date;

    constructor() { }

    ngOnInit() {
      // Creation d'une date aléatoire si elle n'est pas envoyée
      if(!this.created_at){
        let start = new Date(2018, 9, 13)
        let now = new Date()
        // script copié collé bêtement sur Stack overflow 'culte du Cargo ;) '
        this.created_at = new Date(start.getTime() + Math.random() * (now.getTime() - start.getTime()))
      }
    }

    // click sur les bouton, 'love' permet d'avoir une fct commune aux deux boutons
    onLoveIt(love:boolean){
      if(love)
        this.loveIts++
      else if(!love)
        this.loveIts--
    }

    // renvoie green red, ou '' selon la valeur de loveIts
    getColor() {
      if(this.loveIts>0){
        return 'green'
      }
      if(this.loveIts<0){
        return 'red'
      }
      return ''
    }

  }
