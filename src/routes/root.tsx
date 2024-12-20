import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/layout";
import Home from "@/page/Home/Index";
import Feature from "@/page/Feature";
import Games from "@/page/Game";
import Blog from "@/page/Blog";
import Courses from "@/page/Courses";
import Quiz from "@/page/Quiz";
import DetailBlog from "@/page/Blog/Detail";
import Custom404 from "@/components/custom/404";
import About from "@/page/About";
import TruthTable from "@/page/Feature/LogicMath/TruthTable";
import Fibonacci from "@/page/Feature/Sequence/Fibonacci";
import Prime from "@/page/Feature/Sequence/Prime";
import OddEven from "@/page/Feature/Sequence/OddEven";
import Geometric from "@/page/Feature/Sequence/Geometric";
import Square from "@/page/Feature/Sequence/Square";
import Cubic from "@/page/Feature/Sequence/Cubic";

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
                path: "/features",
                children: [
                    {
                        path: "",
                        element: <Feature />
                    },
                    {
                        path: "truth-table",
                        element: <TruthTable />
                    },
                    {
                        path: "fibonacci",
                        element: <Fibonacci />
                    },
                    {
                        path: "prime",
                        element: <Prime />
                    },
                    {
                        path: "odd-even",
                        element: <OddEven />
                    },
                    {
                        path: "geometric",
                        element: <Geometric />
                    },
                    {
                        path: "square",
                        element: <Square />
                    },
                    {
                        path: "cubic",
                        element: <Cubic />
                    },
                ]
            },
            {
                path: "/game",
                element: <Games />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog/:id",
                element: <DetailBlog />
            },
            {
                path: "/courses",
                element: <Courses />
            },
            {
                path: "/quiz",
                element: <Quiz />
            },
        ]
    },
    {
        path: "/about-wise",
        element: <About />
    },
    {
        path: "*",
        element: <Custom404 />,
    }
]);

export default function Routes() {
    return (
        <RouterProvider router={routerData} />
    )
}