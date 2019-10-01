import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncsRoutingModule } from './funcs-routing.module';
import { FuncsComponent } from './funcs.component';

@NgModule({
    imports: [
        CommonModule,
        FuncsRoutingModule,
    ],
    declarations: [
        FuncsComponent
    ]
})
export class FuncsModule {}
