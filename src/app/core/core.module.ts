/**
 * Copyright (C) Schweizerische Bundesbahnen SBB, 2017.
 *
 * ESTA WebJS: Core Module
 *
 * @author u218609 (Kevin Kreuzer)
 * @version: 2.0.0
 * @since 28.04.2017, 2017.
 */
import {CommonModule} from '@angular/common';
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {NavComponent} from './nav/nav.component';
import {AuthModule} from 'esta-webjs-extensions';
import {ButtonModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AuthModule,
    ButtonModule
  ],
  declarations: [NavComponent, HomeComponent],
  exports: [NavComponent]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'core module');
  }
}
