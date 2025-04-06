import Aurelia from 'aurelia';
import { MyApp } from './my-app';

import { Component1 } from './component-1';
import { Component2 } from './component-2';

Aurelia
  .register([Component1, Component2])  
  .app(MyApp)
  .start();
