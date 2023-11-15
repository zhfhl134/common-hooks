import { debounce } from 'lodash-es';
type Service<TData, TParams extends []> = (...args: TParams) => Promise<TData>;
interface Option<TData, TParams extends []> {
    manual?: boolean;
}
export declare const isFunction: (value: unknown) => value is (...args: any) => any;
export { Service, Option };
export declare function sleep(time: number): Promise<void>;
export declare function request(req: any): Promise<unknown>;
export { debounce };
