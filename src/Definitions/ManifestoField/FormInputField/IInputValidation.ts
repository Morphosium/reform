export interface IInputValidation {
    method: (value : any) => boolean;
    message: string;
    name: string;
}