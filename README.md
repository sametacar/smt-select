# smt-select 👆

A high-performance, lightweight, and customizable **Angular Select Component** with built-in Virtual Scroll and Search capabilities.

## ✨ Features

- **🔍 Searchable**: Quickly filter through thousands of options.
- **⚡ Virtual Scroll**: Built-in support for high-performance rendering of large datasets.
- **✅ Multi-Select**: Support for multiple selection out of the box.
- **🎨 Custom Styling**: Fully customizable via SCSS tokens.
- **📱 Responsive**: Works seamlessly across mobile and desktop.
- **🛡️ Type Safe**: Developed with strict TypeScript.

---

## 🧩 Angular Compatibility

| Angular Version | Support |
|-----------------|---------|
| 21.x            | ✅ Yes  |
| 20.x            | ✅ Yes  |
| 19.x            | ✅ Yes  |
| 18.x            | ✅ Yes  |


## 🚀 Installation

Install the package along with Angular CDK (required dependency):

```bash
# For Angular 18
npm install @angular/cdk@^18.0.0 smt-select

# For Angular 19
npm install @angular/cdk@^19.0.0 smt-select

# For Angular 20
npm install @angular/cdk@^20.0.0 smt-select

# For Angular 21
npm install @angular/cdk@^21.0.0 smt-select
```

> **Important**: Angular CDK is a required dependency. Make sure to install the version that matches your Angular version.

---

## 📦 Usage

### 1. Component Logic (app.component.ts)
```typescript
import { SmtSelectComponent, SmtSelectOption, SmtSelectConfig } from 'smt-select';

@Component({
  standalone: true,
  imports: [SmtSelectComponent],
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  myOptions: SmtSelectOption[] = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' }
  ];

  selectConfig: SmtSelectConfig = {
    placeholder: 'Choose an item...',
    virtualScroll: true,
    isMultiSelect: false
  };

  selectedValue: any = null;

  onSelection(value: any) {
    console.log('Selected value:', value);
  }
}
```

### 2. Template (app.component.html)
```html
<smt-select
  [options]="myOptions"
  [config]="selectConfig"
  [(selectedValue)]="selectedValue"
  (selectionChange)="onSelection($event)">
</smt-select>
```

---

## ⚙️ API Reference

### Inputs
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `options` | `SmtSelectOption[]` | `[]` | Array of options to display. |
| `config` | `SmtSelectConfig` | `{}` | Configuration object for the component. |
| `selectedValue` | `any \| any[]` | `null` | The currently selected value(s). Supports two-way binding. |
| `errorMessage` | `string \| null` | `undefined` | Error message to display below the component. |
| `isInvalid` | `boolean` | `false` | Manually trigger error state if `errorMessage` is not provided. |
| `visibility` | `SmtVisibilityType` | `ENABLED` | Controls accessibility (`ENABLED`, `READONLY`, `HIDDEN`). |

### Outputs
| Event | Payload | Description |
|-------|---------|-------------|
| `selectionChange` | `any \| any[]` | Fired when the selected value changes. |
| `selectedValueChange` | `any \| any[]` | Fired when the selected value changes (for two-way binding support). |
| `pocketOpen` | `boolean` | Fired when the dropdown is opened or closed. |

### Configuration (`SmtSelectConfig`)
| Property | Type | Description |
|----------|------|-------------|
| `fieldID` | `string \| number` | Unique ID for the wrapper element. |
| `placeholder` | `string` | Text to show when no value is selected. |
| `virtualScroll` | `boolean` | Enable/Disable CDK Virtual Scroll for large datasets. |
| `isMultiSelect` | `boolean` | Enable multiple item selection. |

---

## 📄 License

MIT © [Samet Acar](LICENSE)
