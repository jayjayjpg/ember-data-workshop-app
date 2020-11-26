import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostsController extends Controller {
  @service store;
  @tracked currentPost;

  @action createPost() {
    let post = this.store.createRecord('post', {
      title: 'My Post Title',
      body: 'Write something',
    });

    this.currentPost = post;
  }
}
