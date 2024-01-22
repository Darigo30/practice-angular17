import { Component } from '@angular/core';
import { CommetsComponent } from '../commets/commets.component';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommetsComponent, NgOptimizedImage],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

}
