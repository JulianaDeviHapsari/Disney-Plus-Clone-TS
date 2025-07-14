import Layout from "./components/layout";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Search from "./pages/Search";
import ContentDetail from "./pages/ContentDetail";
import TVSeries from "./pages/TVSeries";
import Movies from "./pages/Movies";

const router = createBrowserRouter ([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />, 
      },

      {
        path: "/search",
        element: <Search />,
  }, 
  {
    path: "/content/bla",
    element: <ContentDetail />,
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/tvseries",
    element: <TVSeries />,
  }
    ]
  }
 
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App
