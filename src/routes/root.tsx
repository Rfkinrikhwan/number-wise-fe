import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout";
import Home from "@/page/Home/Index";

export const routerData = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
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