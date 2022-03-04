import * as React from "react";
/**
 * landing layout component for a landing page
 * @param param0
 * @returns
 */
declare const LandingPage: React.FC<LandingPageProps>;
interface LandingPageProps {
    children?: React.ReactNode;
    header?: string | React.ReactNode;
    footer?: string | React.ReactNode;
}
export default LandingPage;
