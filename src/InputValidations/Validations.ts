import { IInputValidation } from "./IInputValidation";

export class EmailValidator implements IInputValidation {
    /**Regex from angular source */
    readonly regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    message = "Please type valid email address";
    readonly name = "email"
    method(value : string) : boolean 
    {
        return this.regex.test(value || "")
    }
}

export class NotEmpty implements IInputValidation 
{
    name = "notEmpty";
    message = "Please don't leave this area empty ";
    method(value : string) : boolean 
    {
        return (value != null) && (value.trim() != "");
    }
}