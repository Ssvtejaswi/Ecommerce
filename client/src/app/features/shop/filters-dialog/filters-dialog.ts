import { Component, inject } from '@angular/core';
import { Shop } from '../../../core/services/shop';
import { MatDivider } from '@angular/material/divider';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters-dialog',
  imports: [
    MatDivider,
    MatSelectionList,
    MatListOption,
    FormsModule
  ],
  templateUrl: './filters-dialog.html',
  styleUrl: './filters-dialog.scss'
})
export class FiltersDialog {
  shopService = inject(Shop);
  private dialogRef = inject(MatDialogRef<FiltersDialog>);
  data = inject(MAT_DIALOG_DATA);
  selectedBrands: string[] = this.data.selectedBrands;
  selectedTypes: string[] = this.data.selectedTypes;
  applyFilters() {
    this.dialogRef.close({
      selectedBrands: this.selectedBrands,
      selecteTtypes: this.selectedTypes
    });
  }

}
