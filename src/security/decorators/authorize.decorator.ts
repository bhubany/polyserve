// export type AuthorizeOptions = {
//   bypass?: boolean;
//   scope?: string;
// };

// const routeMetaMap = new Map<string, AuthorizeOptions>();

// export function Authorize(options: AuthorizeOptions = {}) {
//   return function (target: any, propertyKey: string) {
//     const routeId = `${target.constructor.name}.${propertyKey}`;
//     routeMetaMap.set(routeId, options);
//   };
// }

// export function getAuthorizeOptions(
//   target: any,
//   propertyKey: string
// ): AuthorizeOptions {
//   const routeId = `${target.constructor.name}.${propertyKey}`;
//   return routeMetaMap.get(routeId) || {};
// }

import "reflect-metadata";

export type AuthorizeOptions = {
  scope?: string;
  bypass?: boolean;
};

const AUTH_METADATA_KEY = "auth:options";

export const Authorize = (options: AuthorizeOptions = {}) => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(AUTH_METADATA_KEY, options, descriptor.value);
    console.log(Reflect);
  };
};

export const getAuthorizeMetadata = (handler: any): AuthorizeOptions => {
  var res = Reflect.getMetadata(AUTH_METADATA_KEY, handler) || {};
  console.log(res);
  return res;
};
