import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './components/template/guide/guide.component';
import { TypographyComponent } from './components/sample/typography/typography.component';
import { IconComponent } from './components/sample/icon/icon.component';
import { ButtonComponent } from './components/sample/button/button.component';
import { CardComponent } from './components/sample/card/card.component';
import { SidenavComponent } from './components/sample/sidenav/sidenav.component';
import { DatatableComponent } from './components/sample/datatable/datatable.component';

const routes: Routes = [
  {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: 'buttons',
    component: ButtonComponent,
  },
  {
    path: 'icons',
    component: IconComponent,
  },
  {
    path: 'cards',
    component: CardComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
  },
  {
    path: 'data-table',
    component: DatatableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
