import QnA from "@/QnA/QnA"

export default function Home() {
  return (
    <div className="flex flex-row font-sans items-center justify-center min-h-screen p-3 bg-green-500 align-middle">
        <div className="items-center justify-items-center">
            <div className="items-center justify-items-center p-3 bg-white dark:bg-black border-2 rounded-xl">
              <div className = "flex flex-col items-center mb-4">
                  <p className="font-bold text-[80px] leading-none">ACPC</p>
                  <p className="font-semibold text-[43px] leading-none">FALL 2025</p>
                  <p className="font-bold text-[48px] leading-none">CONTEST</p>
              </div>
                <div className="flex flex-col items-center gap-2">
                    <QnA question="When?" answer="October 5 @ 12pm" ps={""}></QnA>
                    <QnA question="Where?" answer="PETR 118" ps={""}></QnA>
                    <QnA question="Why?" answer="Win prizes" ps={""}></QnA>
                    <QnA question="Food?" answer="Free pizza" ps={"(and snacks)"}></QnA>
                </div>
            </div>
            <div className="mt-4 flex flex-col md:flex-row items-center gap-2">
                <a href={"/schedule"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-2 pl-4 pr-4 border-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                    <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-xl">Schedule</p>
                </a>
                <a href={"https://forms.gle/qfuu1N2CVouXyEr18"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-3 pl-5 pr-5 border-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                    <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-3xl">Sign Up</p>
                </a>
                <a href={"/qna"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-2 pl-4 pr-4 border-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                    <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-xl">More Info</p>
                </a>
            </div>
        </div>
    </div>
  );
}
