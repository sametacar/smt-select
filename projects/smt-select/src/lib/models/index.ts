export interface SmtSelectOption {
  value: any;
  label: string;
  [key: string]: any;
}

export enum SmtVisibilityType {
  HIDDEN = 'HIDDEN',
  READONLY = 'READONLY',
  ENABLED = 'ENABLED'
}

export interface SmtSelectConfig {
  fieldID?: string | number;
  placeholder?: string;
  virtualScroll?: boolean;
  isMultiSelect?: boolean;
}
