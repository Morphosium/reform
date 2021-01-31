export interface IInputValidation {
    method: (value: any) => boolean;
    message: string;
    /**Name of validation, that should be do not use '-' or space if you consider reach validation like validationErrors.email */
    name: string;
}
