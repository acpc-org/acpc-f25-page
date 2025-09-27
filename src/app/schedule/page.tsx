import ScheduleBlock from "@/ScheduleBlock/ScheduleBlock"

export default function Schedule() {
    return (
        <div className="flex flex-row font-sans items-center justify-center min-h-screen p-3 bg-[url('/poker.jpg')] bg-cover align-middle">
            <div className="flex flex-col items-center justify-items-center">
                <a href={"/"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-2 pl-4 pr-4 border-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                    <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-xl">Home</p>
                </a>
                <div className="mt-2 items-center justify-items-center p-3 bg-[#ffffffc0] dark:bg-[#000000c0] backdrop-blur-lg border-2 rounded-xl">
                    <div className = "flex flex-col items-center mb-4">

                        <p className="font-semibold text-[43px] leading-none">FALL 2025</p>
                        <p className="font-bold text-[48px] leading-none">CONTEST</p>
                        <p className="font-bold text-[41px] leading-none">SCHEDULE</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <ScheduleBlock when="12pm" what="Arrive at PETR 118"/>
                        <ScheduleBlock when="12:30pm" what="Pre-contest setup"/>
                        <ScheduleBlock when="1pm" what="Contest begins"/>
                        <div className="flex flex-col items-center group">
                            <ScheduleBlock when="4pm" what="Contest ends"/>
                            <p className="transition-all opacity-40 group-hover:opacity-100 text-sm">(Eat pizza, discuss solutions, get prizes)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
