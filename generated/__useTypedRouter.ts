/**
 * ---------------------
 * 🚗🚦 Generated by nuxt-typed-router. Do not modify !
 * ---------------------
 * */

import { useNuxtApp } from '#app';
import { TypedRouter, RouteListDecl } from './typed-router';

/** Returns instances of $typedRouter and $routesList fully typed to use in your components or your Vuex/Pinia store
 *
 * @exemple
 *
 * ```ts
 * const { router, routes } = useTypedRouter();
 * ```
 */
export const useTypedRouter = (): {
  /** Export of $router with type check */
  router: TypedRouter;
  /** Contains a typed dictionnary of all your route names (for syntax sugar) */
  routes: RouteListDecl;
} => {
  const { $router } = useNuxtApp();

  const routesList = {
    homeEn: 'home___en',
    homeZhCn: 'home___zh-CN',
    homeZhTw: 'home___zh-TW',
    indexEn: 'index___en',
    indexZhCn: 'index___zh-CN',
    indexZhTw: 'index___zh-TW',
  };

  return {
    router: $router,
    routes: routesList,
  } as any;
};
