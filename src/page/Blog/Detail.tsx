
import { useEffect } from "react";
import BlogDetail from "@/json/Blog/DetailBlog/Data.json"
import { useParams } from "react-router-dom";
import { changeThemeStore } from "@/store";
import parse from 'html-react-parser';

export default function DetailBlog() {
    const { theme } = changeThemeStore();
    const params = useParams();
    const data = BlogDetail.blog_detail.filter((data) => data.slug === params.slug)[0]

    console.log(data);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className={`mx-auto px-4 sm:px-6 lg:px-96 py-12 min-h-screen ${theme === 'dark' ? 'bg-wise-dark text-white' : ''}`}>
            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img
                    src={`../../../public/${data.image}`}
                    alt="Blog hero image"
                    className="w-full h-[400px] object-cover"
                />
            </div>

            {parse(data.content)}

        </article>
    );
}