import { debounce } from 'lodash-es';

type Service<TData, TParams extends []> = (...args: TParams) => Promise<TData>;
interface Option<TData, TParams extends []> {
  manual?: boolean; // 请求是手动触发还是自动触发
}

export const isFunction = (value: unknown): value is (...args: any) => any =>
  typeof value === 'function';

export { Service, Option };

export function sleep(time: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

export function request(req) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (req === 0) {
        reject(new Error('fail'));
      } else {
        resolve('success');
      }
    }, 1000),
  );
}

function isNodeOrWeb() {
  const freeGlobal =
    (typeof global === 'undefined' ? 'undefined' : typeof global) == 'object' &&
    global &&
    global.Object === Object &&
    global;
  const freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  return freeGlobal || freeSelf;
}

if (!isNodeOrWeb()) {
  global.Date = Date;
}

export { debounce };
