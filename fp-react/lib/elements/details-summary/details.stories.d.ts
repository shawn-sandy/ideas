declare namespace _default {
    export const title: string;
    export { Details as component };
    export namespace subcomponents {
        export { SummaryElement };
    }
    export namespace parameters {
        const layout: string;
    }
}
export default _default;
export function DetailsElement(args: any): JSX.Element;
export namespace DetailsElement {
    namespace args {
        export const children: string;
        const title_1: string;
        export { title_1 as title };
    }
}
import Details from "./details-summary";
import { SummaryElement } from "./summary.stories";
