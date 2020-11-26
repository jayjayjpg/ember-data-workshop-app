import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class PostsController extends Controller {
  // Exercise: Creating Records (service injection)
  @tracked currentPost;

  @action createPost() {
    // ... Exercise: Creating Records
  }
}
