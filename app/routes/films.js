import Route from '@ember/routing/route';

export default class FilmsRoute extends Route {
  model() {
    return this.store.findAll('film');
  }
}
