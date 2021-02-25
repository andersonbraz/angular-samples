import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
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
    AutocompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    FormsModule,
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
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
