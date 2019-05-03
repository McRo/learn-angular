export class Post {
  id: number;
  loveIts: number;
  created_at: Date;
  constructor(public title: string,
              public content: string,) {}
}
