import { TabProntuarioPageModule } from './../tab-prontuario/tab-prontuario.module';
import { TabCarteiraPageModule } from './../tab-carteira/tab-carteira.module';
import { TabSobrePageModule } from './../tab-sobre/tab-sobre.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab-prontuario',
        children: [
          {
            path: '',
            loadChildren: '../tab-prontuario/tab-prontuario.module#TabProntuarioPageModule'
          }
        ]
      },
      {
        path: 'tab-carteira',
        children: [
          {
            path: '',
            loadChildren: '../tab-carteira/tab-carteira.module#TabCarteiraPageModule'
          }
        ]
      },
      {
        path: 'tab-sobre',
        children: [
          {
            path: '',
            loadChildren: '../tab-sobre/tab-sobre.module#TabSobrePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab-prontuario',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'tabs',
    redirectTo: '/tabs/tab-prontuario',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [ ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  entryComponents:[
    
  ]
})
export class TabsPageRoutingModule {}
