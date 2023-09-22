import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  selectedLng: string = '';
  constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
    this.selectedLng =
      this.translateService.currentLang ||
      this.translateService.getDefaultLang();
  }

  onLngChange(event: any) {
    let selectedLng = event.target.value;
    this.translateService.use(selectedLng);
  }
  // Reserved Parameter
}
