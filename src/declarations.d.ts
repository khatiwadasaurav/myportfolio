// src/types/css-doodle.d.ts
declare namespace JSX {
    interface IntrinsicElements {
        'css-doodle': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
}

declare module 'css-doodle' {
    const content: any;
    export default content;
}