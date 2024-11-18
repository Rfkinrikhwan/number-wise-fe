import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout";
import Home from "@/page/Home/Index";
import Feature from "@/page/Feature";
import Games from "@/page/Game";

export const routerData = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/fitur",
                element: <Feature />
            },
            {
                path: "/game",
                element: <Games />
            }
        ]
    },
    {
        path: "*",
        // element: <PageNotFound />,
    }
]);

export default function Routes() {
    return (
        <RouterProvider router={routerData} />
    )
}