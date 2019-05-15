import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card/image-card.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        ImageCardComponent,
        ItemListComponent,
        ButtonComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ImageCardComponent,
        ItemListComponent,
        ButtonComponent
    ]
})

export class SkepsisComponentsmodule { }
