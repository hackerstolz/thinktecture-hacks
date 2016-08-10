import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent}  from '../../components/app/app';
import {SidebarComponent} from '../../components/sidebar/sidebar';
import {TitlebarComponent} from '../../components/titlebar/titlebar';
import {HackathonService} from '../../services/hackathon';
import {LocationService} from '../../services/location';
import {AppRoutes, appRoutingProviders} from '../../components/app/routes';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, AppRoutes],
    declarations: [AppComponent, SidebarComponent, TitlebarComponent],
    bootstrap: [AppComponent],
    providers: [HackathonService, LocationService, { provide: LocationStrategy, useClass: HashLocationStrategy }, appRoutingProviders],
    entryComponents: []
})
export class AppModule {
}
