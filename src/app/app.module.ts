import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { TypographyComponent } from './components/sample/typography/typography.component';
import { ButtonComponent } from './components/sample/button/button.component';
import { IconComponent } from './components/sample/icon/icon.component';
import { BadgeComponent } from './components/sample/badge/badge.component';
import { ProgressSpinnerComponent } from './components/sample/progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './components/sample/toolbar/toolbar.component';
import { SidenavComponent } from './components/sample/sidenav/sidenav.component';
import { MenuComponent } from './components/sample/menu/menu.component';
import { ListComponent } from './components/sample/list/list.component';
import { GridComponent } from './components/sample/grid/grid.component';
import { ExpansionComponent } from './components/sample/expansion/expansion.component';
import { CardComponent } from './components/sample/card/card.component';
import { TabsComponent } from './components/sample/tabs/tabs.component';
import { StepperComponent } from './components/sample/stepper/stepper.component';
import { InputComponent } from './components/sample/input/input.component';
import { AutocompleteComponent } from './components/sample/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/sample/checkbox/checkbox.component';
import { DatepickerComponent } from './components/sample/datepicker/datepicker.component';
import { TooltipComponent } from './components/sample/tooltip/tooltip.component';
import { SnackbarComponent } from './components/sample/snackbar/snackbar.component';
import { DialogComponent } from './components/sample/dialog/dialog.component';
import { DialogMessageComponent } from './components/sample/dialog-message/dialog-message.component';
import { DatatableComponent } from './components/sample/datatable/datatable.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GuideComponent } from './components/template/guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TypographyComponent,
    ButtonComponent,
    IconComponent,
    BadgeComponent,
    ProgressSpinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridComponent,
    ExpansionComponent,
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialogComponent,
    DialogMessageComponent,
    DatatableComponent,
    GuideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
