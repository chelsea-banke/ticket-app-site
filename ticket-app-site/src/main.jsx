import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import ReactDOM from "react-dom/client";
import React from "react";
import {HomePage} from "./pages/home/home";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { EventsPage } from "./pages/events/events";

let router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/events",
    Component: EventsPage
  }
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

library.add(fab, fas, far)