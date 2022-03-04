declare namespace _default {
    export const title: string;
    export { Article as component };
}
export default _default;
export function ArticleLoader(args: any): JSX.Element;
export namespace ArticleLoader {
    namespace args {
        const speed: number;
    }
}
export function ArticleBlue(args: any): JSX.Element;
export namespace ArticleBlue {
    export namespace args_1 {
        const speed_1: number;
        export { speed_1 as speed };
        export const backgroundColor: string;
        export const width: number;
    }
    export { args_1 as args };
}
import Article from "./article";
