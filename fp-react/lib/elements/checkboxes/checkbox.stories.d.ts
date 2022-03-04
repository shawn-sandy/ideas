declare namespace _default {
    export const title: string;
    export { Checkbox as component };
    export namespace parameters {
        namespace status {
            const type: string;
        }
    }
}
export default _default;
export function InputField(args: any): JSX.Element;
export namespace InputField {
    namespace args {
        const name: string;
        function click(): void;
    }
}
export function CheckboxInput(args: any): JSX.Element;
export namespace CheckboxInput {
    export namespace args_1 {
        const name_1: string;
        export { name_1 as name };
        export function click_1(): void;
        export { click_1 as click };
    }
    export { args_1 as args };
}
import Checkbox from "./checkbox";
