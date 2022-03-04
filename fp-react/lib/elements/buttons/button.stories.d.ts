declare namespace _default {
    export const title: string;
    export { Button as component };
    export namespace parameters {
        namespace status {
            const type: string;
        }
    }
}
export default _default;
export function Default(args: any): JSX.Element;
export namespace Default {
    namespace args {
        const children: string;
        function click(): void;
    }
}
export function Disabled(args: any): JSX.Element;
export namespace Disabled {
    export namespace args_1 {
        export const disabled: boolean;
        const children_1: string;
        export { children_1 as children };
        export function click_1(): void;
        export { click_1 as click };
    }
    export { args_1 as args };
}
export function RedStyle(args: any): JSX.Element;
export namespace RedStyle {
    export namespace args_2 {
        const children_2: string;
        export { children_2 as children };
        export const styles: {
            '--btn-bg': string;
            '--btn-color': string;
        };
        export function click_2(): void;
        export { click_2 as click };
    }
    export { args_2 as args };
}
export function RedDisabled(args: any): JSX.Element;
export namespace RedDisabled {
    export namespace args_3 {
        const disabled_1: boolean;
        export { disabled_1 as disabled };
        const children_3: string;
        export { children_3 as children };
        const styles_1: {
            '--btn-bg': string;
            '--btn-color': string;
        };
        export { styles_1 as styles };
        export function click_3(): void;
        export { click_3 as click };
    }
    export { args_3 as args };
}
export function LargeButton(args: any): JSX.Element;
export namespace LargeButton {
    export namespace args_4 {
        const children_4: string;
        export { children_4 as children };
        const styles_2: {
            '--btn-fs': string;
        };
        export { styles_2 as styles };
        export function click_4(): void;
        export { click_4 as click };
    }
    export { args_4 as args };
}
import Button from "./button";
