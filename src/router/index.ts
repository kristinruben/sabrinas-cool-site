/* eslint-disable import/extensions */
import Vue from 'vue';
import VueRouter, { RouterOptions, RouteConfig } from 'vue-router';

// eslint-disable-next-line
import Home from '../views/Home.vue';

function loadView(view: string) {
  return () => import(/*  webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

const routes: RouteConfig[] = [
  {
    path: '/home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

// // declare class ModifiedVueRouter extends VueRouter {
// //   constructor(options?: RouterOptions)

// //   app: Vue;
// //   mode: RouterMode;
// //   currentRoute: Route

// //   beforeEach(guard: NavigationGuard): Function
// //   beforeResolve(guard: NavigationGuard): Function
// //   afterEach(hook: (to: Route, from: Route) => any): Function
// //   push(location: RawLocation): Promise<Route>
// //   replace(location: RawLocation): Promise<Route>
// //   push(
// //     location: RawLocation,
// //     onComplete?: Function,
// //     onAbort?: ErrorHandler
// //   ): void
// //   replace(
// //     location: RawLocation,
// //     onComplete?: Function,
// //     onAbort?: ErrorHandler
// //   ): void
// //   go(n: number): void
// //   back(): void
// //   forward(): void
// //   getMatchedComponents(to?: RawLocation | Route): Component[]
// //   onReady(cb: Function, errorCb?: ErrorHandler): void
// //   onError(cb: ErrorHandler): void
// //   addRoutes(routes: RouteConfig[]): void
// //   resolve(
// //     to: RawLocation,
// //     current?: Route,
// //     append?: boolean
// //   ): {
// //     location: Location
// //     route: Route
// //     href: string
// //     // backwards compat
// //     normalizedTo: Location
// //     resolved: Route
// //   }

// // }

// interface ModifiedRouteConfig {
//   path: string
//   name?: string
//   component?: Component
//   components?: Dictionary<Component>
//   redirect?: RedirectOption
//   alias?: string | string[]
//   children?: RouteConfig[]
//   meta?: any
//   beforeEnter?: NavigationGuard
//   props?: boolean | Object | RoutePropsFunction
//   caseSensitive?: boolean
//   pathToRegexpOptions?: PathToRegexpOptions
// }

// interface ModifiedRouterOptions {
//   routes?: ModifiedRouteConfig[]
//   mode?: RouterMode
//   fallback?: boolean
//   base?: string
//   linkActiveClass?: string
//   linkExactActiveClass?: string
//   parseQuery?: (query: string) => Object
//   stringifyQuery?: (query: Object) => string
//   scrollBehavior?: (
//     to: Route,
//     from: Route,
//     savedPosition: Position | void
//   ) => PositionResult | Promise<PositionResult> | undefined | null
// }


// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: Home,
//   },
// ];

// // @ts-ignore
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;

// // declare class ModifiedVueRouter extends VueRouter {
// //   constructor(options?: RouterOptions)

// //   app: Vue
// //   mode: RouterMode
// //   currentRoute: Route

// //   beforeEach(guard: NavigationGuard): Function
// //   beforeResolve(guard: NavigationGuard): Function
// //   afterEach(hook: (to: Route, from: Route) => any): Function
// //   push(location: RawLocation): Promise<Route>
// //   replace(location: RawLocation): Promise<Route>
// //   push(
// //     location: RawLocation,
// //     onComplete?: Function,
// //     onAbort?: ErrorHandler
// //   ): void
// //   replace(
// //     location: RawLocation,
// //     onComplete?: Function,
// //     onAbort?: ErrorHandler
// //   ): void
// //   go(n: number): void
// //   back(): void
// //   forward(): void
// //   getMatchedComponents(to?: RawLocation | Route): Component[]
// //   onReady(cb: Function, errorCb?: ErrorHandler): void
// //   onError(cb: ErrorHandler): void
// //   addRoutes(routes: RouteConfig[]): void
// //   resolve(
// //     to: RawLocation,
// //     current?: Route,
// //     append?: boolean
// //   ): {
// //     location: Location
// //     route: Route
// //     href: string
// //     // backwards compat
// //     normalizedTo: Location
// //     resolved: Route
// //   }

// //   static install: PluginFunction<never>
// // }
