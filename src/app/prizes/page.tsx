import QnA from "@/QnA/QnA";

const prize_list = ["iPad",
    "Airpod Pros",
    "Bose SoundLink Flex SE Portable Waterproof Bluetooth Speakers",
    "Gaming Keyboards & Mice",
    "Lego Sets",
    "Poker Sets",
    "Owala Waterbottles",
    "Jellycat Stuffed Animals"]

export default function Prizes() {
    return (
        <div className="flex flex-row font-sans items-center justify-center min-h-screen p-3 bg-[url('/poker.jpg')] bg-cover align-middle">
            <div className="items-center justify-items-center">
                <a href={"/"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-2 pl-4 pr-4 border-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                    <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-xl">Home</p>
                </a>
                <div className="mt-2 items-center justify-items-center p-3 bg-[#ffffffc0] dark:bg-[#000000c0] backdrop-blur-lg border-2 rounded-xl">
                    <div className = "flex flex-col items-center mb-4">

                        <p className="font-semibold text-[43px] leading-none">FALL 2025</p>
                        <p className="font-bold text-[48px] leading-none">CONTEST</p>
                        <p className="font-bold text-[64px] leading-none">PRIZES</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <QnA question="Grand Prize" answer="iPad" ps={"9th-gen WiFi"}/>
                        <div className = "flex flex-col items-center group">
                            <p className="transition-all leading-none text-xl opacity-50 group-hover:opacity-70 text-center">
                                What else?
                            </p>
                            {prize_list.map((item, i) => (
                                <li className="list-none" key={i}>
                                    <p className="transition-all leading-none text-xl opacity-80 group-hover:opacity-100 text-center">
                                        {item}
                                    </p>
                                </li>
                            ))}

                        </div>
                        <QnA question="Misc Prizes" answer="???" ps={"e.g. \"First to solve A\""}/>
                    </div>
                </div>

            </div>
        </div>
    );
}
