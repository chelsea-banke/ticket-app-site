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
import { NewsPage } from "./pages/news/news";
import { LoginForm } from "./pages/login/login";
import { OrganizerRegistrationForm } from "./pages/organizer-registration/organizer-registration";

let router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/events",
    Component: EventsPage
  },
  {
    path: '/news',
    Component: NewsPage
  },
  {
    path: '/login',
    Component: LoginForm
  },
  {
    path: '/organizer-registration',
    Component: OrganizerRegistrationForm
  }
]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

library.add(fab, fas, far)