import SingleStep from "./SingleStep";

export default function Steps() {
    const stepInfo = [
        {
            number: 1,
            key: "1",
            title: 'Type in your location',
            description: "We'll check the weather and soil conditions for you",
            svgItem: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}' +
                ' stroke="currentColor" className="w-6 h-6">  <path strokeLinecap="round" strokeLinejoin="round"' +
                ' d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6' +
                ' 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25' +
                ' 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>'
        },
        {
            number: 2,
            key: "2",
            title: 'Check out the results',
            description: "See how well is your location doing in terms of the agricultural well-being.",
            svgItem: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}' +
                ' stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round"' +
                ' d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996' +
                ' 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504' +
                ' 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125' +
                ' 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>'
        },
        {
            number: 3,
            key: "3",
            title: 'Contact us for a proper analysis',
            description: "We'll help you to make the most of our technology. We'll deal with every aspect of your agricultural business.",
            svgItem: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}' +
                ' stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round"' +
                ' d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25' +
                ' 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186' +
                ' 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875' +
                ' 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0' +
                ' .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-' +
                '.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0' +
                ' .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05' +
                ' 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007' +
                '-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422' +
                ' 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" /></svg>'

        }
    ]

    return (
        <div
            className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-y">
            <div className="grid max-w-2xl mx-auto">
                {stepInfo.map((step) => SingleStep(step))}
                {/*    <div className="flex">*/}
                {/*        <div className="flex flex-col items-center mr-6">*/}
                {/*            <div className="w-px h-10 bg-gray-300 sm:h-full"/>*/}
                {/*            <div>*/}
                {/*                <div*/}
                {/*                    className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">*/}
                {/*                    2*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="w-px h-full bg-gray-300"/>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">*/}
                {/*            <div className="sm:mr-5">*/}
                {/*                <div*/}
                {/*                    className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">*/}
                {/*                    <svg*/}
                {/*                        className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"*/}
                {/*                        stroke="currentColor"*/}
                {/*                        viewBox="0 0 52 52"*/}
                {/*                    >*/}
                {/*                        <polygon*/}
                {/*                            strokeWidth="3"*/}
                {/*                            strokeLinecap="round"*/}
                {/*                            strokeLinejoin="round"*/}
                {/*                            fill="none"*/}
                {/*                            points="29 13 14 29 25 29 23 39 38 23 27 23"*/}
                {/*                        />*/}
                {/*                    </svg>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <p className="text-xl font-semibold sm:text-base">Heart attack</p>*/}
                {/*                <p className="text-sm text-gray-700">*/}
                {/*                    A flower in my garden, a mystery in my panties. Heart attack*/}
                {/*                    never stopped old Big Bear. I didn't even know we were calling*/}
                {/*                    him Big Bear.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="flex">*/}
                {/*        <div className="flex flex-col items-center mr-6">*/}
                {/*            <div className="w-px h-10 bg-gray-300 sm:h-full"/>*/}
                {/*            <div>*/}
                {/*                <div*/}
                {/*                    className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">*/}
                {/*                    3*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="w-px h-full opacity-0"/>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">*/}
                {/*            <div className="sm:mr-5">*/}
                {/*                <div*/}
                {/*                    className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">*/}
                {/*                    <svg*/}
                {/*                        className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"*/}
                {/*                        stroke="currentColor"*/}
                {/*                        viewBox="0 0 52 52"*/}
                {/*                    >*/}
                {/*                        <polygon*/}
                {/*                            strokeWidth="3"*/}
                {/*                            strokeLinecap="round"*/}
                {/*                            strokeLinejoin="round"*/}
                {/*                            fill="none"*/}
                {/*                            points="29 13 14 29 25 29 23 39 38 23 27 23"*/}
                {/*                        />*/}
                {/*                    </svg>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div>*/}
                {/*                <p className="text-xl font-semibold sm:text-base">Never stop</p>*/}
                {/*                <p className="text-sm text-gray-700">*/}
                {/*                    The first mate and his Skipper too will do their very best to*/}
                {/*                    make the others comfortable in their tropic island nest. Michael*/}
                {/*                    Knight a young loner.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </div>
        </div>
    );
};
