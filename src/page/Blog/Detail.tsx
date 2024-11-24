
import { useEffect } from "react";
import img38 from "../../../public/37.png";

export default function DetailBlog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Image */}
            <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img
                    src={img38}
                    alt="Blog hero image"
                    className="w-full h-[400px] object-cover"
                />
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    10 Learning Game Ideas: Making Education More Engaging
                </h1>

                {/* Introduction */}
                <p className="text-xl text-gray-600 mb-8 text-justify">
                    Learning doesn't have to be rigid and boring. By incorporating game elements into the learning process, students can more easily understand and retain educational material. Here are 10 learning game ideas that can be implemented in the classroom or at home.
                </p>

                {/* Game Items */}
                <div className="space-y-12 text-justify">
                    {/* Game 1 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            1. Word Chain Challenge
                        </h2>
                        <p className="text-gray-600">
                            This classic game is highly effective for improving vocabulary and language skills. Students form a circle, and each person must say a word that begins with the last letter of the previous word. For example: Apple → Eagle → Elephant → Tiger. To make it more challenging, you can limit categories to animals, countries, or scientific terms.
                        </p>
                    </section>

                    {/* Game 2 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            2. Math Market
                        </h2>
                        <p className="text-gray-600">
                            Create a market simulation in the classroom where students act as sellers and buyers. They must conduct buying and selling transactions using play money, calculate change, and maintain simple bookkeeping. This game teaches basic mathematics, arithmetic, and practical financial management skills.
                        </p>
                    </section>

                    {/* Game 3 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            3. Science Detective
                        </h2>
                        <p className="text-gray-600">
                            Create mystery scenarios involving scientific concepts. Students act as detectives who must solve cases using the scientific method. For example, determining mysterious chemical substances through a series of simple tests or identifying rock types based on their characteristics.
                        </p>
                    </section>

                    {/* Game 4 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            4. Historical Time Travelers
                        </h2>
                        <p className="text-gray-600">
                            Students 'travel' to various historical periods. They must wear simple costumes and role-play as historical figures or ordinary people from that era. Each student narrates life experiences according to their time period's context, including daily life, challenges, and significant events.
                        </p>
                    </section>

                    {/* Game 5 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            5. Geography Treasure Hunt
                        </h2>
                        <p className="text-gray-600">
                            Prepare maps and clues related to geographical locations, landforms, or regional cultures. Students work in groups to solve puzzles and find the 'treasure'. This game develops understanding of geography, navigation, and team cooperation.
                        </p>
                    </section>

                    {/* Game 6 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            6. Vocabulary Theater
                        </h2>
                        <p className="text-gray-600">
                            Students choose new words they've learned and create mini-performances where they must use these words in the correct context. They can create dialogues, monologues, or even simple songs. This activity helps remember word meanings while building confidence.
                        </p>
                    </section>

                    {/* Game 7 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            7. Ecosystem Game
                        </h2>
                        <p className="text-gray-600">
                            Each student plays a different component in an ecosystem (plants, animals, microorganisms). They must explain their role and how they interact with other components. This game helps understand concepts of food chains, nutrient cycles, and ecosystem balance.
                        </p>
                    </section>

                    {/* Game 8 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            8. Grammar Ninja
                        </h2>
                        <p className="text-gray-600">
                            Students practice grammar in an entertaining way. Display sentences on the board or screen, and students must quickly identify grammar errors or improve sentence structure. The faster and more accurate they are, the higher their 'ninja level' becomes.
                        </p>
                    </section>

                    {/* Game 9 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            9. Art History Charades
                        </h2>
                        <p className="text-gray-600">
                            Students act out or redraw famous artworks without speaking, while others guess the title, artist, or art period. This game introduces students to art history in an entertaining way that involves creativity.
                        </p>
                    </section>

                    {/* Game 10 */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            10. Scientific Debate Battle
                        </h2>
                        <p className="text-gray-600">
                            Organize scientific debates where students must argue using facts and data. Topics can range from climate change to future technology. They must prepare research, statistics, and examples to support their arguments. This activity develops critical thinking and communication skills.
                        </p>
                    </section>
                </div>

                {/* Conclusion */}
                <section className="mt-16 bg-wise-gray p-8 rounded-lg text-justify">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                        Conclusion
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-600">
                            These learning games not only make the learning process more enjoyable but also help develop important skills such as problem-solving, teamwork, and creativity. Most importantly, ensure to adjust the difficulty level and complexity of the games according to students' age and abilities.
                        </p>
                        <p className="text-gray-600">
                            Remember that each game can be modified according to classroom needs or learning situations. Evaluation and feedback after the games are also important to ensure learning objectives are achieved.
                        </p>
                    </div>
                </section>
            </div>
        </article>
    );
}