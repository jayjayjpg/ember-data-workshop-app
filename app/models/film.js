import Model, { attr } from '@ember-data/model';

export default class FilmModel extends Model {
  @attr title;
  @attr description;
  @attr director;
  @attr producer;
  @attr releaseDate;
  @attr rtScore;
}
