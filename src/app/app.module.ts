import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { CookieService } from './cookie.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HeaderComponent } from './admin/header/header.component';
import { FooterComponent } from './admin/footer/footer.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DocumentsComponent } from './admin/documents/documents.component';
import { WordsComponent } from './admin/words/words.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { TopbarComponent } from './admin/topbar/topbar.component';
import { DocumentComponent } from './admin/document/document.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { WordComponent } from './admin/word/word.component';
import { PrintdocumentComponent } from './admin/printdocument/printdocument.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DocumentsComponent,
    WordsComponent,
    EmployeesComponent,
    TopbarComponent,
    DocumentComponent,
    EmployeeComponent,
    WordComponent,
    PrintdocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
