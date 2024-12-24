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
import LengthConverter from "@/page/Feature/ConverterCalculator/LengthConverter";
import AreaConverter from "@/page/Feature/ConverterCalculator/AreaConverter";
import VolumeConverter from "@/page/Feature/ConverterCalculator/VolumeConverter";
import MassConverter from "@/page/Feature/ConverterCalculator/MassaConverter";
import TimeConverter from "@/page/Feature/ConverterCalculator/TimeConverter";
import TemperatureConverter from "@/page/Feature/ConverterCalculator/TemperatureConverter";
import NumberSystemConverter from "@/page/Feature/ConverterCalculator/NumberSystemConverter";

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
                    {
                        path: "length-conversion",
                        element: <LengthConverter />
                    },
                    {
                        path: "area-conversion",
                        element: <AreaConverter />
                    },
                    {
                        path: "volume-conversion",
                        element: <VolumeConverter />
                    },
                    {
                        path: "mass-conversion",
                        element: <MassConverter />
                    },
                    {
                        path: "time-conversion",
                        element: <TimeConverter />
                    },
                    {
                        path: "temp-conversion",
                        element: <TemperatureConverter />
                    },
                    {
                        path: "number-system-conversion",
                        element: <NumberSystemConverter />
                    },
                    {
                        path: "angle-conversion",
                        element: <NumberSystemConverter />
                    },
                ]
            },
            {
                path: "/game",
                children: [
                    {
                        path: "",
                        element: <Games />
                    },
                    {
                        path: "24-uno-math",
                        element: <Games />
                    },
                    {
                        path: "snake-math",
                        element: <Games />
                    },
                ]
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog/:slug",
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