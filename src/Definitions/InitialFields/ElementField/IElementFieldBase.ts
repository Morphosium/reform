import { ElementFieldEventBinding } from "../../Types/ElementFieldEventBinding";
import { IKeyValue, KeyValue } from "../../Types/KeyValue";
import { IInitialField } from "../InitialField/IInitialField";
import { IInitialFieldBase } from "../InitialField/IInitialFieldBase";



export interface IElementFieldBase extends IInitialFieldBase {
    /** 
     * Element tag. same as <tag></tag> 
     * if not provided, element's tag will be 'div'
    */
   tag?: string;

   /** 
    * id of element. same as <... id="element-id" .../>  and reflection's id that constructed with element field
    * also, can be located with id by calling findReflectionById method of reflector.
   */
   id?: string;

   /**
    * Element class. same as <... class="class-name" ../>
    */
   class?: string;

   /**
    * Represents element content. it can contains another initial fields or string value
    */
   content: IInitialField[] | string;

   /**
    * represents element attributes. same as <.. attribute1="attribute 1 value" ../>
    */
   attributes?: Array<IKeyValue>;

   /**
    * represents element's events. 
    * like as element.addEventListener("event", callback). but 
    * each event has a lot of callbacks. callbacks is called with reflection, event and reflector in order if event triggered.
    */
   eventBindings?: ElementFieldEventBinding;
}
