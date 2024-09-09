/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as NavLayoutImport } from './routes/_navLayout'
import { Route as NavLayoutIndexImport } from './routes/_navLayout/index'
import { Route as NavLayoutPostsImport } from './routes/_navLayout/posts'

// Create/Update Routes

const NavLayoutRoute = NavLayoutImport.update({
  id: '/_navLayout',
  getParentRoute: () => rootRoute,
} as any)

const NavLayoutIndexRoute = NavLayoutIndexImport.update({
  path: '/',
  getParentRoute: () => NavLayoutRoute,
} as any)

const NavLayoutPostsRoute = NavLayoutPostsImport.update({
  path: '/posts',
  getParentRoute: () => NavLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_navLayout': {
      id: '/_navLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof NavLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_navLayout/posts': {
      id: '/_navLayout/posts'
      path: '/posts'
      fullPath: '/posts'
      preLoaderRoute: typeof NavLayoutPostsImport
      parentRoute: typeof NavLayoutImport
    }
    '/_navLayout/': {
      id: '/_navLayout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof NavLayoutIndexImport
      parentRoute: typeof NavLayoutImport
    }
  }
}

// Create and export the route tree

interface NavLayoutRouteChildren {
  NavLayoutPostsRoute: typeof NavLayoutPostsRoute
  NavLayoutIndexRoute: typeof NavLayoutIndexRoute
}

const NavLayoutRouteChildren: NavLayoutRouteChildren = {
  NavLayoutPostsRoute: NavLayoutPostsRoute,
  NavLayoutIndexRoute: NavLayoutIndexRoute,
}

const NavLayoutRouteWithChildren = NavLayoutRoute._addFileChildren(
  NavLayoutRouteChildren,
)

interface FileRoutesByFullPath {
  '': typeof NavLayoutRouteWithChildren
  '/posts': typeof NavLayoutPostsRoute
  '/': typeof NavLayoutIndexRoute
}

interface FileRoutesByTo {
  '/posts': typeof NavLayoutPostsRoute
  '/': typeof NavLayoutIndexRoute
}

interface FileRoutesById {
  '/_navLayout': typeof NavLayoutRouteWithChildren
  '/_navLayout/posts': typeof NavLayoutPostsRoute
  '/_navLayout/': typeof NavLayoutIndexRoute
}

interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/posts' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/posts' | '/'
  id: '/_navLayout' | '/_navLayout/posts' | '/_navLayout/'
  fileRoutesById: FileRoutesById
}

interface RootRouteChildren {
  NavLayoutRoute: typeof NavLayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  NavLayoutRoute: NavLayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_navLayout"
      ]
    },
    "/_navLayout": {
      "filePath": "_navLayout.tsx",
      "children": [
        "/_navLayout/posts",
        "/_navLayout/"
      ]
    },
    "/_navLayout/posts": {
      "filePath": "_navLayout/posts.tsx",
      "parent": "/_navLayout"
    },
    "/_navLayout/": {
      "filePath": "_navLayout/index.tsx",
      "parent": "/_navLayout"
    }
  }
}
ROUTE_MANIFEST_END */
