declare const cssTransition: {
    readonly color: "transition-colors duration-micro ease-out motion-reduce:transition-none";
    readonly background: "transition-colors duration-micro ease-out motion-reduce:transition-none";
    readonly border: "transition-colors duration-micro ease-out motion-reduce:transition-none";
    readonly shadow: "transition-shadow duration-flow ease-out motion-reduce:transition-none";
    readonly opacity: "transition-opacity duration-micro ease-out motion-reduce:transition-none";
    readonly transform: "transition-transform duration-flow ease-out motion-reduce:transition-none";
};
declare const interactiveCssTransition = "transition-[color,background-color,border-color,box-shadow,opacity,transform] duration-flow ease-out motion-reduce:transition-none";
type CssTransition = keyof typeof cssTransition;

type index_CssTransition = CssTransition;
declare const index_cssTransition: typeof cssTransition;
declare const index_interactiveCssTransition: typeof interactiveCssTransition;
declare namespace index {
  export { type index_CssTransition as CssTransition, index_cssTransition as cssTransition, index_interactiveCssTransition as interactiveCssTransition };
}

export { type CssTransition as C, interactiveCssTransition as a, cssTransition as c, index as i };
