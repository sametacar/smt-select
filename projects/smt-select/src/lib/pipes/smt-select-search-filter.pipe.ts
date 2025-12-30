import { Pipe, PipeTransform } from '@angular/core';
import { SmtSelectOption } from '../models';

@Pipe({
    name: 'smtSelectSearchFilter',
    standalone: true,
    pure: true
})
export class SmtSelectSearchFilterPipe implements PipeTransform {
    transform(options: SmtSelectOption[], searchText: string): SmtSelectOption[] {
        if (!options) return [];
        if (!searchText) return options;

        searchText = searchText.toLowerCase();

        return options.filter(option => {
            return option.label.toLowerCase().includes(searchText) ||
                (typeof option.value === 'string' && option.value.toLowerCase().includes(searchText));
        });
    }
}
