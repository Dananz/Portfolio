import {
    trigger,
    animate,
    transition,
    style,
    query
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter', [style({ opacity: 0 })], { optional: true }),
        query(
            ':leave',
            [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
            { optional: true }
        )
    ])
]);


export const scaleAnimation = trigger('scaleAnimation', [
    transition('* => *', [
        query(':enter', [style({ opacity: 0, transform: "scale(0.5) ", 'transform-origin': " center" })], { optional: true }),
        query(
            ':leave',
            [style({ opacity: 1, transform: "scale(1)", 'transform-origin': " center" }),
            animate('300ms cubic-bezier(0.785, 0.135, 0.15, 0.86)', style({ opacity: 0, transform: "scale(0.8) ", 'transform-origin': " center" }))],
            { optional: true }
        ),
        query(
            ':enter',
            [style({ opacity: .1, transform: "scale(0.8) ", 'transform-origin': " center" }),
            animate('500ms cubic-bezier(0.785, 0.135, 0.15, 0.86)', style({ opacity: 1, transform: "scale(1)", 'transform-origin': " center" }))],
            { optional: true }
        )
    ])
]);