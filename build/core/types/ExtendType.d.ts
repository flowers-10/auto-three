export type ExtendType<T, K extends string | number | symbol, P> = T & {
    [Key in K]: P;
};
