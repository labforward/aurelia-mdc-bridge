import { TaskQueue } from 'aurelia-framework';
export declare class MdcTextField {
    private element;
    private taskQueue;
    private static id;
    value: string;
    focused: boolean;
    outlined: boolean;
    type: string;
    multiline: boolean;
    box: boolean;
    multilineRows: string;
    multilineCols: string;
    disabled: boolean;
    placeholder: string;
    ariaLabel: string;
    dense: boolean;
    fullwidth: boolean;
    required: boolean;
    pattern: string;
    helptext: string;
    helptextShow: boolean;
    helptextPersistent: boolean;
    helptextValidation: boolean;
    prefilled: boolean;
    min: number;
    max: number;
    step: number;
    name: string;
    private log;
    private textfieldId;
    private helptextId;
    private mdcTextfield;
    private elementMain;
    private leadingIconSlot;
    private elementInput;
    private elementLabel;
    private trailingIconSlot;
    private elementHelpText;
    private styleHelptext;
    private stopFocusedChanged;
    constructor(element: Element, taskQueue: TaskQueue);
    focus(): void;
    getNativeInput(): {
        value: string;
        disabled: boolean;
        badInput: boolean;
        checkValidity: () => boolean;
    };
    valid: boolean;
    private bind;
    private unbind;
    private attached;
    private detached;
    private isIcon;
    private valueChanged;
    private focusedChanged;
    private onBlur;
    private onFocus;
    private disabledChanged;
    private placeholderChanged;
    private ariaLabelChanged;
    private patternChanged;
    private boxChanged;
    private multilineChanged;
    private denseChanged;
    private fullwidthChanged;
    private outlinedChanged;
    private prefilledChanged;
    private helptextShowChanged;
    private helptextPersistentChanged;
    private helptextValidationChanged;
}
