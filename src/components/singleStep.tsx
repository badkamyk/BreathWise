
type StepProps = {
    number: number;
    title: string;
    description: string;
    svgItem: string;
    key: string;

}
export default function SingleStep({ number, title, description, svgItem, key }: StepProps) {
    return (
        <div key={key} className="flex">
            <div className="flex flex-col items-center mr-6">
                <div className="w-px h-10 bg-gray-300 sm:h-full" />
                <div>
                    <div
                        className="flex items-center justify-center w-8 h-8 text-sm font-medium border rounded-full">
                        {number}
                    </div>
                </div>
                <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
                <div className="sm:mr-5">
                    <div
                        className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
                        dangerouslySetInnerHTML={{ __html: svgItem }}
                    />
                </div>
                <div>
                    <p className="text-xl font-semibold sm:text-base lg:text-lg">{title}</p>
                    <p className="text-md text-gray-700">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
