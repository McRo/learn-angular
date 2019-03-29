import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts = [
    {
      title: 'Angular c\'est vraiment chouette',
      content: 'Depuis la version 1, on est vraiment dans un framework qui tient la root',
      loveIts: 3,
      created_at: null
    },
    {
      title: 'Le Type Script',
      content: 'La fiabilité du TS, on arrête des scopes aléatoire qui génère des erreurs, et les \
       variables typées sont top !',
      loveIts: 0,
      created_at: new Date(2018,1,5)
    },
    {
      title: 'Apprendre un nouveau language',
      content: 'Est ce que ça vaut vraiment le coup de se taper d\'apprendre tous les 6 mois des nouveaux \
      Framework ? S\'ennuierait-on ?',
      loveIts: -2,
      created_at: new Date()
    },
  ]



}
