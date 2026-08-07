import * as react_jsx_runtime from 'react/jsx-runtime';
import { Variants, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

declare const fadeIn: Variants;
declare const scaleIn: Variants;
declare const slideIn: {
    readonly up: {
        readonly initial: {
            readonly opacity: 0;
            readonly y: 16;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly y: 0;
            readonly transition: {
                readonly duration: 0.3;
                readonly ease: [number, number, number, number];
            };
        };
        readonly exit: {
            readonly opacity: 0;
            readonly y: 8;
            readonly transition: {
                readonly duration: 0.1;
                readonly ease: [number, number, number, number];
            };
        };
    };
    readonly down: {
        readonly initial: {
            readonly opacity: 0;
            readonly y: number;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly y: 0;
            readonly transition: {
                readonly duration: 0.3;
                readonly ease: [number, number, number, number];
            };
        };
        readonly exit: {
            readonly opacity: 0;
            readonly y: number;
            readonly transition: {
                readonly duration: 0.1;
                readonly ease: [number, number, number, number];
            };
        };
    };
    readonly left: {
        readonly initial: {
            readonly opacity: 0;
            readonly x: 16;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly x: 0;
            readonly transition: {
                readonly duration: 0.3;
                readonly ease: [number, number, number, number];
            };
        };
        readonly exit: {
            readonly opacity: 0;
            readonly x: 8;
            readonly transition: {
                readonly duration: 0.1;
                readonly ease: [number, number, number, number];
            };
        };
    };
    readonly right: {
        readonly initial: {
            readonly opacity: 0;
            readonly x: number;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly x: 0;
            readonly transition: {
                readonly duration: 0.3;
                readonly ease: [number, number, number, number];
            };
        };
        readonly exit: {
            readonly opacity: 0;
            readonly x: number;
            readonly transition: {
                readonly duration: 0.1;
                readonly ease: [number, number, number, number];
            };
        };
    };
};
declare const animatedList: Variants;
declare const animatedListItem: Variants;
declare const modalSurface: Variants;
declare const drawerSurface: {
    readonly left: {
        readonly initial: {
            readonly opacity: 0;
            readonly x: "-100%";
        };
        readonly animate: {
            readonly opacity: 1;
            readonly x: 0;
            readonly transition: {
                readonly type: "spring";
                readonly stiffness: 320;
                readonly damping: 36;
                readonly mass: 1;
            };
        };
        readonly exit: {
            readonly opacity: 0;
            readonly x: "-100%";
            readonly transition: {
                readonly duration: 0.1;
                readonly ease: [number, number, number, number];
            };
        };
    };
    readonly right: {
        readonly initial: {
            readonly opacity: 0;
            readonly x: "100%";
        };
        readonly animate: {
            readonly opacity: 1;
            readonly x: 0;
            readonly transition: {
                readonly type: "spring";
                readonly stiffness: 320;
                readonly damping: 36;
                readonly mass: 1;
            };
        };
        readonly exit: {
            readonly opacity: 0;
            readonly x: "100%";
            readonly transition: {
                readonly duration: 0.1;
                readonly ease: [number, number, number, number];
            };
        };
    };
    readonly top: {
        readonly initial: {
            readonly opacity: 0;
            readonly y: "-100%";
        };
        readonly animate: {
            readonly opacity: 1;
            readonly y: 0;
            readonly transition: {
                readonly type: "spring";
                readonly stiffness: 320;
                readonly damping: 36;
                readonly mass: 1;
            };
        };
        readonly exit: {
            readonly opacity: 0;
            readonly y: "-100%";
            readonly transition: {
                readonly duration: 0.1;
                readonly ease: [number, number, number, number];
            };
        };
    };
    readonly bottom: {
        readonly initial: {
            readonly opacity: 0;
            readonly y: "100%";
        };
        readonly animate: {
            readonly opacity: 1;
            readonly y: 0;
            readonly transition: {
                readonly type: "spring";
                readonly stiffness: 320;
                readonly damping: 36;
                readonly mass: 1;
            };
        };
        readonly exit: {
            readonly opacity: 0;
            readonly y: "100%";
            readonly transition: {
                readonly duration: 0.1;
                readonly ease: [number, number, number, number];
            };
        };
    };
};
declare const popoverSurface: Variants;
declare const pageTransition: Variants;
declare const reducedMotionVariants: Variants;

type AnimatedDivProps = HTMLMotionProps<"div"> & {
    children: ReactNode;
};
declare function FadeIn({ children, ...props }: AnimatedDivProps): react_jsx_runtime.JSX.Element;
declare function SlideIn({ children, direction, ...props }: AnimatedDivProps & {
    direction?: keyof typeof slideIn;
}): react_jsx_runtime.JSX.Element;
declare function ScaleIn({ children, ...props }: AnimatedDivProps): react_jsx_runtime.JSX.Element;
declare function AnimatedCard({ children, ...props }: AnimatedDivProps): react_jsx_runtime.JSX.Element;
declare function AnimatedList({ children, ...props }: AnimatedDivProps): react_jsx_runtime.JSX.Element;
declare function AnimatedModal({ children, open, ...props }: AnimatedDivProps & {
    open: boolean;
}): react_jsx_runtime.JSX.Element;
declare function AnimatedDrawer({ children, open, side, ...props }: AnimatedDivProps & {
    open: boolean;
    side?: keyof typeof drawerSurface;
}): react_jsx_runtime.JSX.Element;
declare function AnimatedPopover({ children, open, ...props }: AnimatedDivProps & {
    open: boolean;
}): react_jsx_runtime.JSX.Element;
declare function PageTransition({ children, ...props }: AnimatedDivProps): react_jsx_runtime.JSX.Element;

declare const animationDurations: {
    readonly instant: 0;
    readonly micro: 0.1;
    readonly fast: 0.16;
    readonly standard: 0.2;
    readonly reveal: 0.3;
    readonly page: 0.44;
};
declare const animationEasings: {
    readonly linear: "linear";
    readonly enter: [number, number, number, number];
    readonly exit: [number, number, number, number];
    readonly standard: [number, number, number, number];
    readonly emphasized: [number, number, number, number];
};
declare const animationSprings: {
    readonly interactive: {
        readonly type: "spring";
        readonly stiffness: 380;
        readonly damping: 34;
        readonly mass: 0.8;
    };
    readonly layout: {
        readonly type: "spring";
        readonly stiffness: 480;
        readonly damping: 42;
        readonly mass: 1;
    };
    readonly panel: {
        readonly type: "spring";
        readonly stiffness: 320;
        readonly damping: 36;
        readonly mass: 1;
    };
};
declare const animationDistances: {
    readonly xs: 4;
    readonly sm: 8;
    readonly md: 16;
    readonly lg: 24;
    readonly panel: 32;
};
declare const animationTransitions: {
    readonly instant: {
        readonly duration: 0;
    };
    readonly micro: {
        readonly duration: 0.1;
        readonly ease: [number, number, number, number];
    };
    readonly standard: {
        readonly duration: 0.2;
        readonly ease: [number, number, number, number];
    };
    readonly reveal: {
        readonly duration: 0.3;
        readonly ease: [number, number, number, number];
    };
    readonly page: {
        readonly duration: 0.44;
        readonly ease: [number, number, number, number];
    };
    readonly layout: {
        readonly type: "spring";
        readonly stiffness: 480;
        readonly damping: 42;
        readonly mass: 1;
    };
    readonly panel: {
        readonly type: "spring";
        readonly stiffness: 320;
        readonly damping: 36;
        readonly mass: 1;
    };
};
type AnimationDuration = keyof typeof animationDurations;
type AnimationTransition = keyof typeof animationTransitions;

export { AnimatedCard as A, FadeIn as F, PageTransition as P, ScaleIn as S, AnimatedDrawer as a, AnimatedList as b, AnimatedModal as c, AnimatedPopover as d, type AnimationDuration as e, type AnimationTransition as f, SlideIn as g, animatedList as h, animatedListItem as i, animationDistances as j, animationDurations as k, animationEasings as l, animationSprings as m, animationTransitions as n, drawerSurface as o, fadeIn as p, modalSurface as q, pageTransition as r, popoverSurface as s, reducedMotionVariants as t, scaleIn as u, slideIn as v };
