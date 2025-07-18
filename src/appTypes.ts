export type Langs = 'en' | 'ru' | 'tj';

export type ErrorResponse = {
    status: number;
    message: {
        [key in Langs]: string;
    };
};
