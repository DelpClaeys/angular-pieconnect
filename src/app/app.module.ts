import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapPageComponent } from './components/map-page.component';
import { AboutPageComponent } from './components/about-page.component';
import { LinksPageComponent } from './components/links-page.component';
import { AppRoutingModule } from './app.routing.module';
import { PostSheetService } from './services/post-sheet.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ForumDialogComponent } from './components/forum-dialog.component';
import { ModalService } from './services/modal.service';
import { EditDialogComponent } from './components/edit-dialog.component';
import { ForumPageComponent } from './components/forum-page.component';

@NgModule({
    declarations: [
        AppComponent,
        MapPageComponent,
        AboutPageComponent,
        LinksPageComponent,
        ForumDialogComponent,
        EditDialogComponent,
        ForumPageComponent,
    ],
    imports: [
        BrowserModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        LeafletModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule, // required animations module
        ToastrModule.forRoot() // ToastrModule added
    ],
    entryComponents: [ForumDialogComponent, EditDialogComponent],
    providers: [DataService, PostSheetService, ModalService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
