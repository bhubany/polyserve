export type AuthorizeOptions = {
  bypass?: boolean;
  scope?: string;
};

const routeMetaMap = new Map<string, AuthorizeOptions>();

export function Authorize(options: AuthorizeOptions = {}) {
  return function (target: any, propertyKey: string) {
    const routeId = `${target.constructor.name}.${propertyKey}`;
    routeMetaMap.set(routeId, options);
  };
}

export function getAuthorizeOptions(
  target: any,
  propertyKey: string
): AuthorizeOptions {
  const routeId = `${target.constructor.name}.${propertyKey}`;
  return routeMetaMap.get(routeId) || {};
}
