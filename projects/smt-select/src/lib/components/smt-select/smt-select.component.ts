import {
    Component, Input, Output, EventEmitter,
    ElementRef, Renderer2, ViewChild, OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {
    SmtSelectOption, SmtSelectConfig,
    SmtVisibilityType
} from '../../models';
import { SmtSelectSearchFilterPipe } from '../../pipes/smt-select-search-filter.pipe';
import { timer, take } from 'rxjs';

@Component({
    selector: 'smt-select',
    standalone: true,
    imports: [CommonModule, FormsModule, ScrollingModule, SmtSelectSearchFilterPipe],
    templateUrl: './smt-select.component.html',
    styleUrls: ['./smt-select.component.scss']
})
export class SmtSelectComponent implements OnDestroy {
    @Input() options: SmtSelectOption[] = [];
    @Input() config: SmtSelectConfig = {};
    @Input() selectedValue: any | any[] = null;
    @Input() errorMessage?: string | null;
    @Input() isInvalid = false;
    @Input() visibility: SmtVisibilityType = SmtVisibilityType.ENABLED;

    @Output() selectionChange = new EventEmitter<any | any[]>();
    @Output() pocketOpen = new EventEmitter<boolean>();

    @ViewChild('pocket') pocketElement!: ElementRef;
    @ViewChild('input') inputElement!: ElementRef;

    isPocketOpen = false;
    isOpenReverse = false;
    searchText = '';

    private clickListener: (() => void) | null = null;
    public VisibilityType = SmtVisibilityType;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnDestroy(): void {
        this.removeOutsideClickListener();
    }

    get hasSelection(): boolean {
        if (this.config.isMultiSelect) {
            return Array.isArray(this.selectedValue) && this.selectedValue.length > 0;
        }
        return this.selectedValue !== null && this.selectedValue !== undefined && this.selectedValue !== '';
    }

    displayText(): string {
        if (!this.hasSelection) return this.config.placeholder || 'Select...';

        if (this.config.isMultiSelect) {
            const selectedOptions = this.options.filter(opt =>
                (this.selectedValue as any[]).includes(opt.value)
            );
            return selectedOptions.map(opt => opt.label).join(', ');
        }

        const selectedOption = this.options.find(opt => opt.value === this.selectedValue);
        return selectedOption ? selectedOption.label : (this.selectedValue as string);
    }

    togglePocket(): void {
        if (this.visibility === SmtVisibilityType.READONLY) {
            return;
        }

        if (this.isPocketOpen) {
            this.closePocket();
        } else {
            this.openPocket();
        }
    }

    private openPocket(): void {
        this.calculateDirection();
        this.isPocketOpen = true;
        this.pocketOpen.emit(true);
        this.searchText = '';
        this.focusInput();
        this.addOutsideClickListener();
    }

    private closePocket(): void {
        if (!this.isPocketOpen) return;
        this.isPocketOpen = false;
        this.pocketOpen.emit(false);
        this.removeOutsideClickListener();
    }

    private addOutsideClickListener(): void {
        if (this.clickListener) return;

        // Only clicks outside can reach the document, so we can close directly
        this.clickListener = this.renderer.listen('document', 'mousedown', () => {
            this.closePocket();
        });
    }

    private removeOutsideClickListener(): void {
        if (this.clickListener) {
            this.clickListener();
            this.clickListener = null;
        }
    }

    private calculateDirection(): void {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const pocketHeight = 200; // max-height 

        if (windowHeight - rect.bottom < pocketHeight && rect.top > pocketHeight) {
            this.isOpenReverse = true;
        } else {
            this.isOpenReverse = false;
        }
    }

    private focusInput(): void {
        timer(100).pipe(take(1)).subscribe(() => {
            this.inputElement?.nativeElement.focus();
        });
    }

    onBlur(): void {
        // Keyboard exit scenarios delay
        timer(200).pipe(take(1)).subscribe(() => {
            if (this.isPocketOpen) {
                this.closePocket();
            }
        });
    }

    isSelected(option: SmtSelectOption): boolean {
        if (this.config.isMultiSelect) {
            return Array.isArray(this.selectedValue) && this.selectedValue.includes(option.value);
        }
        return this.selectedValue === option.value;
    }

    onEnterPressed(): void {
        if (!this.searchText) return;

        const filtered = this.options.filter(option =>
            option.label.toLowerCase().includes(this.searchText.toLowerCase()) ||
            (typeof option.value === 'string' && option.value.toLowerCase().includes(this.searchText.toLowerCase()))
        );

        if (filtered.length > 0) {
            this.selectOption(filtered[0]);
            this.closePocket();
            if (this.config.isMultiSelect) {
                this.searchText = '';
            }
        }
    }

    selectOption(option: SmtSelectOption, event?: MouseEvent): void {
        if (event) {
            event.stopPropagation();
        }

        if (this.config.isMultiSelect) {
            if (!Array.isArray(this.selectedValue)) {
                this.selectedValue = [];
            }

            const index = this.selectedValue.indexOf(option.value);
            if (index > -1) {
                this.selectedValue.splice(index, 1);
            } else {
                this.selectedValue.push(option.value);
            }

            // View update for spread or slice 
            this.selectedValue = [...this.selectedValue];
        } else {
            this.selectedValue = option.value;
        }

        this.closePocket();
        this.selectionChange.emit(this.selectedValue);
    }
}
