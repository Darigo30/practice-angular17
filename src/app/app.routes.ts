import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'blog-post',
        title: 'Blog Post',
        component: BlogPostComponent,
    },
    {
        path: 'contact',
        title: 'Contact form',
        component: ContactComponent,
    }
];
