import Application from 'data-workshop-app/app';
import config from 'data-workshop-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
