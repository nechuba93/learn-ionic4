import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  mensajes: Post[] = [];

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPost().subscribe( (posts: Post[]) => {
      this.mensajes = posts;
    });
  }

}
