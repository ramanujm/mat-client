import { NgModule } from '@angular/core';
import { MatButtonModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,
         MatCardModule,
         MatFormFieldModule,
         MatInputModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatRadioModule,
         MatSelectModule,
         MatOptionModule,
         MatSlideToggleModule
        } from '@angular/material';

        @NgModule({
          imports: [MatButtonModule,
            MatMenuModule,
            MatToolbarModule,
            MatIconModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatRadioModule,
            MatSelectModule,
            MatOptionModule,
            MatSlideToggleModule ],
          exports: [MatButtonModule,
            MatMenuModule,
            MatToolbarModule,
            MatIconModule,
            MatCardModule,
            MatFormFieldModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatRadioModule,
            MatSelectModule,
            MatOptionModule,
            MatSlideToggleModule ]
        })


export class MaterialModule {

}
