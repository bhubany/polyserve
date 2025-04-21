import { AsyncLocalStorage } from "async_hooks";

type ContextData = {
  userId: string;
  shopId: string;
  email: string;
  [key: string]: any;
};

const asyncLocalStorage = new AsyncLocalStorage<ContextData>();

export class RequestContext {
  static run(callback: () => void, data: ContextData) {
    asyncLocalStorage.run(data, callback);
  }

  static get(key: keyof ContextData) {
    const store = asyncLocalStorage.getStore();
    return store?.[key];
  }

  static set(key: keyof ContextData, value: any) {
    const store = asyncLocalStorage.getStore();
    if (store) {
      store[key] = value;
    }
  }

  static getAll(): ContextData | undefined {
    return asyncLocalStorage.getStore();
  }
}
