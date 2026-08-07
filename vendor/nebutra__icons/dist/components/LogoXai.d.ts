import type * as React from "react";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /** Icon size in px (default: 16). Overrides width/height props. */
    size?: number | string;
}
declare const LogoXai: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export { LogoXai };
export default LogoXai;
