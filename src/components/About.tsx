import AboutPerson from "./AboutPerson";

export default function About() {
    const peopleInfo = [
        {
            name: "Alexa",
            imgFirst: "https://i.ibb.co/FYTKDG6/Rectangle-118-2.png",
            imgSecond: "https://i.ibb.co/0nQqQZV/Rectangle-118.png",
            alt: "Alexa featured img"
        },
        {
            name: "Olivia",
            imgFirst: "https://i.ibb.co/fGmxhVy/Rectangle-119.png",
            imgSecond: "https://i.ibb.co/NrWKJ1M/Rectangle-119.png",
            alt: "Olivia featured img"
        },
        {
            name: "Liam",
            imgFirst: "https://i.ibb.co/Pc6XVVC/Rectangle-120.png",
            imgSecond: "https://i.ibb.co/C5MMBcs/Rectangle-120.png",
            alt: "Liam featured img"
        },
        {
            name: "Elijah",
            imgFirst: "https://i.ibb.co/7nSJPXQ/Rectangle-121.png",
            imgSecond: "https://i.ibb.co/ThZBWxH/Rectangle-121.png",
            alt: "Elijah featured img"
        }
    ]

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a
                        reader will be distracted by the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum.In the first place we have granted to God, and by this our present
                        charter confirmed for us and our heirs forever that the English Church shall be free, and shall
                        have her rights entire, and her liberties inviolate; and we will that it be thus observed; which
                        is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
                         alt="A group of People"/>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our Story</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a
                        reader will be distracted by the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum.In the first place we have granted to God, and by this our present
                        charter confirmed for us and our heirs forever that the English Church shall be free, and shall
                        have her rights entire, and her liberties inviolate; and we will that it be thus observed; which
                        is apparent from</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        {peopleInfo.map(person => (AboutPerson(person)))}
                    </div>
                </div>
            </div>
        </div>
    );
};
