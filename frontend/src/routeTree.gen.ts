/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignupImport } from './routes/signup'
import { Route as SetupImport } from './routes/setup'
import { Route as LoginImport } from './routes/login'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutListsListIdImport } from './routes/_layout/lists/$listId'

// Create/Update Routes

const SignupRoute = SignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const SetupRoute = SetupImport.update({
  id: '/setup',
  path: '/setup',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutListsListIdRoute = LayoutListsListIdImport.update({
  id: '/lists/$listId',
  path: '/lists/$listId',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/setup': {
      id: '/setup'
      path: '/setup'
      fullPath: '/setup'
      preLoaderRoute: typeof SetupImport
      parentRoute: typeof rootRoute
    }
    '/signup': {
      id: '/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof SignupImport
      parentRoute: typeof rootRoute
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/lists/$listId': {
      id: '/_layout/lists/$listId'
      path: '/lists/$listId'
      fullPath: '/lists/$listId'
      preLoaderRoute: typeof LayoutListsListIdImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutIndexRoute: typeof LayoutIndexRoute
  LayoutListsListIdRoute: typeof LayoutListsListIdRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutIndexRoute: LayoutIndexRoute,
  LayoutListsListIdRoute: LayoutListsListIdRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/setup': typeof SetupRoute
  '/signup': typeof SignupRoute
  '/': typeof LayoutIndexRoute
  '/lists/$listId': typeof LayoutListsListIdRoute
}

export interface FileRoutesByTo {
  '/login': typeof LoginRoute
  '/setup': typeof SetupRoute
  '/signup': typeof SignupRoute
  '/': typeof LayoutIndexRoute
  '/lists/$listId': typeof LayoutListsListIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/login': typeof LoginRoute
  '/setup': typeof SetupRoute
  '/signup': typeof SignupRoute
  '/_layout/': typeof LayoutIndexRoute
  '/_layout/lists/$listId': typeof LayoutListsListIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/login' | '/setup' | '/signup' | '/' | '/lists/$listId'
  fileRoutesByTo: FileRoutesByTo
  to: '/login' | '/setup' | '/signup' | '/' | '/lists/$listId'
  id:
    | '__root__'
    | '/_layout'
    | '/login'
    | '/setup'
    | '/signup'
    | '/_layout/'
    | '/_layout/lists/$listId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  LoginRoute: typeof LoginRoute
  SetupRoute: typeof SetupRoute
  SignupRoute: typeof SignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  LoginRoute: LoginRoute,
  SetupRoute: SetupRoute,
  SignupRoute: SignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/login",
        "/setup",
        "/signup"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/",
        "/_layout/lists/$listId"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/setup": {
      "filePath": "setup.tsx"
    },
    "/signup": {
      "filePath": "signup.tsx"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_layout/lists/$listId": {
      "filePath": "_layout/lists/$listId.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
