import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { ContainerComponent } from './components/container/container.component';
import { MagicCircleModule } from './components/magic-circle';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ContainerComponent,
        IconComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MagicCircleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
