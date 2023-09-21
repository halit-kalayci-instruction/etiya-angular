import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { SearchPostPipe } from './pipes/search-post.pipe';

@NgModule({
  declarations: [PostListComponent, PostDetailComponent, SearchPostPipe],
  imports: [CommonModule, PostRoutingModule],
})
export class PostModule {}
