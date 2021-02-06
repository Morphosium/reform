import { ElementField } from "../ElementField/ElementField";
import { InputType } from "../../Types/InputType";
import { IInputField } from "./IInputField";
import { IInputFieldBase } from "./IInputFieldBase";
import { ObjectFieldTransfer } from "../../../Utils/objectFieldTransfer";
import { InitialFied } from "../InitialField/index";
import { IInputValidation } from "../../../InputValidations/index";
import { ElementAttribute } from "../../Types/ElementAttribute";

export class InputField<V = string> extends InitialFied implements IInputField<V> {
    /** @inheritDoc */
    readonly isInput = true;
    /** @inheritDoc */
    inputType: InputType;
    /** @inheritDoc */
    name: string;
    /** @inheritDoc */
    convertToFinalValue: (rawValue: V) => V;
    /** @inheritDoc */
    isElement?: boolean;
    /** @inheritDoc */
    isSection?: boolean;
    /** @inheritDoc */
    id?: string;
    /** @inheritDoc */
    label?: string;
    /** @inheritDoc */
    initialValue?: V;
    /** @inheritDoc */
    excludeOnFinalData?: boolean;
    /** @inheritDoc */
    disabled?: boolean;
    /** @inheritDoc */
    placeholder?: string;
    /** @inheritDoc */
    labelClass?: string;
    /** @inheritDoc */
    inputClass?: string;
    /** @inheritDoc */
    labelAttributes?: ElementAttribute[];
    /** @inheritDoc */
    inputAttributes?: ElementAttribute[];
    /** @inheritDoc */
    template?: string;
    /** @inheritDoc */
    validations?: IInputValidation[];

    constructor(base: IInputFieldBase<V>) {
        super(base);
        ObjectFieldTransfer(base, this);
        this.convertToFinalValue = base.convertToFinalValue;
    }

}