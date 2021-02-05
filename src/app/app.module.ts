import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoteComponent } from './note/note.component';
import { ToolsComponent } from './tools/tools.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { AddValuePipePipe } from './add-value-pipe.pipe';
import { AppHighlightDirective } from './app-highlight.directive';
import { FilterComponent } from './filter/filter.component';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { MatInputModule } from '@angular/material/input';
import { NoteService } from './services/note.service';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { HttpMockApiInterceptor } from './services/http-mock-api.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { FilterService } from './services/filter.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    ToolsComponent,
    AddValuePipePipe,
    AppHighlightDirective,
    FilterComponent,
    HomeComponent,
    AddNoteComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    CommonModule,
    HttpClientModule,
    MatSelectModule,
  ],
  providers: [NoteService,FilterService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpMockApiInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
