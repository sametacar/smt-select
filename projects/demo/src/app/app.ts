import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmtSelectComponent, SmtSelectOption, SmtSelectConfig } from '../../../../projects/smt-select/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SmtSelectComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  label = 'smt-select demo';

  // Options
  countries: SmtSelectOption[] = [
    { value: 'dz', label: 'Algeria' },
    { value: 'ar', label: 'Argentina' },
    { value: 'au', label: 'Australia' },
    { value: 'at', label: 'Austria' },
    { value: 'az', label: 'Azerbaijan' },
    { value: 'bh', label: 'Bahrain' },
    { value: 'bd', label: 'Bangladesh' },
    { value: 'be', label: 'Belgium' },
    { value: 'br', label: 'Brazil' },
    { value: 'bg', label: 'Bulgaria' },
    { value: 'ca', label: 'Canada' },
    { value: 'cl', label: 'Chile' },
    { value: 'cn', label: 'China' },
    { value: 'co', label: 'Colombia' },
    { value: 'hr', label: 'Croatia' },
    { value: 'cz', label: 'Czech Republic' },
    { value: 'dk', label: 'Denmark' },
    { value: 'eg', label: 'Egypt' },
    { value: 'fi', label: 'Finland' },
    { value: 'fr', label: 'France' },
    { value: 'ge', label: 'Georgia' },
    { value: 'de', label: 'Germany' },
    { value: 'gr', label: 'Greece' },
    { value: 'hu', label: 'Hungary' },
    { value: 'is', label: 'Iceland' },
    { value: 'in', label: 'India' },
    { value: 'id', label: 'Indonesia' },
    { value: 'ie', label: 'Ireland' },
    { value: 'il', label: 'Israel' },
    { value: 'it', label: 'Italy' },
    { value: 'jp', label: 'Japan' },
    { value: 'kz', label: 'Kazakhstan' },
    { value: 'ke', label: 'Kenya' },
    { value: 'kw', label: 'Kuwait' },
    { value: 'lu', label: 'Luxembourg' },
    { value: 'my', label: 'Malaysia' },
    { value: 'mx', label: 'Mexico' },
    { value: 'ma', label: 'Morocco' },
    { value: 'nl', label: 'Netherlands' },
    { value: 'nz', label: 'New Zealand' },
    { value: 'ng', label: 'Nigeria' },
    { value: 'no', label: 'Norway' },
    { value: 'om', label: 'Oman' },
    { value: 'pk', label: 'Pakistan' },
    { value: 'pe', label: 'Peru' },
    { value: 'ph', label: 'Philippines' },
    { value: 'pl', label: 'Poland' },
    { value: 'pt', label: 'Portugal' },
    { value: 'qa', label: 'Qatar' },
    { value: 'ro', label: 'Romania' },
    { value: 'ru', label: 'Russia' },
    { value: 'sa', label: 'Saudi Arabia' },
    { value: 'rs', label: 'Serbia' },
    { value: 'sg', label: 'Singapore' },
    { value: 'sk', label: 'Slovakia' },
    { value: 'si', label: 'Slovenia' },
    { value: 'za', label: 'South Africa' },
    { value: 'kr', label: 'South Korea' },
    { value: 'es', label: 'Spain' },
    { value: 'se', label: 'Sweden' },
    { value: 'ch', label: 'Switzerland' },
    { value: 'th', label: 'Thailand' },
    { value: 'tn', label: 'Tunisia' },
    { value: 'tr', label: 'Türkiye' },
    { value: 'ua', label: 'Ukraine' },
    { value: 'ae', label: 'United Arab Emirates' },
    { value: 'gb', label: 'United Kingdom' },
    { value: 'us', label: 'United States' },
    { value: 'uz', label: 'Uzbekistan' },
    { value: 'vn', label: 'Vietnam' }
  ];

  // Single Select Configuration
  singleSelectConfig: SmtSelectConfig = {
    fieldID: 'single-select',
    placeholder: 'Choose a country (Single)',
    isMultiSelect: false,
    virtualScroll: false
  };
  singleSelectedValue: string = 'ar';

  // Multi Select Configuration
  multiSelectConfig: SmtSelectConfig = {
    fieldID: 'multi-select',
    placeholder: 'Choose countries (Multi)',
    isMultiSelect: true
  };
  multiSelectedValue: string[] = ['ar', 'de'];

  // Multi Select Virtual Scroll Configuration
  multiSelectConfigVirtualScroll: SmtSelectConfig = {
    fieldID: 'multi-select',
    placeholder: 'Choose countries (Multi)',
    isMultiSelect: true,
    virtualScroll: true
  };
  multiSelectedValueVirtualScroll: string[] = ['be', 'us'];

  onSingleChange(val: any) {
    console.log('Single Select Changed:', val);
    this.singleSelectedValue = val;
  }

  onMultiChange(val: any) {
    console.log('Multi Select Changed:', val);
    this.multiSelectedValue = val;
  }

  onMultiVirtualChange(val: any) {
    console.log('Multi Virtual Select Changed:', val);
    this.multiSelectedValueVirtualScroll = val;
  }
}
