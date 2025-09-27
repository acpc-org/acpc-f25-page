import QnA from "@/QnA/QnA";

export default function QnAPage() {
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
                        <p className="font-bold text-[31px] leading-none">INFORMATION</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">

                        <QnA question="Beginner-friendly?" answer="Yes!" ps={"We have problems for all skill levels, from complete beginners to total experts"}/>
                        <QnA question="Open internet?" answer="Yes*" ps={"*Information from internet must exist prior to contest beginning"}/>
                        <QnA question="Can I use AI?" answer="No" ps={"No AI use allowed in any way"}/>
                        <QnA question="Allowed languages?" answer="Basically all" ps={"C++, Python, Java, basically anything on LC/CF"}/>
                        <QnA question="Is this a team contest?" answer="No" ps={"Please work individually. We have a team contest next semester"}/>
                        <QnA question="Non-material prizes?" answer="ICPC qualification & CSCE 430 access" ps={"Top performers may be able to force request into 430 and qualify to represent TAMU at ICPC"}/>
                        <QnA question="What's an ad-hoc prize?" answer="Bonus categories that anyone can win" ps={"e.g. \"First to solve A\", \"Submission that consumes the most memory\", etc."}/>
                    </div>
                </div>

            </div>
        </div>
    );
}
