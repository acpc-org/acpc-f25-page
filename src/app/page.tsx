import QnA from "@/QnA/QnA"
import Image from "next/image"

export default function Home() {
  return (

    <div className="flex flex-row font-sans items-center justify-center min-h-screen p-3 bg-[url('/poker.jpg')] bg-cover align-middle">
        <div className="flex flex-col items-center justify-items-center">
            <div className="mb-4 items-center justify-items-center p-6 bg-[#ffffffc0] dark:bg-[#000000c0] backdrop-blur-lg border-2 rounded-xl">
              <div className = "flex flex-col items-center mb-4">
                  <p className="font-bold text-[80px] leading-none">ACPC</p>
                  <p className="font-semibold text-[43px] leading-none">FALL 2025</p>
                  <p className="font-bold text-[48px] leading-none">CONTEST</p>
              </div>
                <div className="flex flex-col items-center gap-2">
                    <QnA question="When?" answer="October 5 @ 12pm" ps={""}/>
                    <QnA question="Where?" answer="PETR 118" ps={""}/>
                    <QnA question="Why?" answer="Win prizes" ps={""}/>
                    <QnA question="Food?" answer="Free pizza" ps={"(and snacks)"}/>
                </div>
            </div>
            <a href={"https://docs.google.com/document/d/1ShnclbhNNIDOcAIK1SB2i2hKoTTebiQWQVqSurM2Ei8/edit?usp=sharing"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-3 pl-5 pr-5 border-2 mb-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-3xl">Registration Instructions</p>
            </a>
            <a href={"https://forms.gle/qfuu1N2CVouXyEr18"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-3 pl-5 pr-5 border-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-3xl">Sign Up</p>
            </a>
            <div className="mt-1 flex flex-col md:flex-row items-center gap-2">
                <a href={"/schedule"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-2 pl-4 pr-4 border-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                    <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-xl">Schedule</p>
                </a>
                <a href={"/prizes"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-2 pl-4 pr-4 border-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                    <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-xl">Prizes</p>
                </a>
                <a href={"/qna"} className="transition-all rounded-2xl bg-[#dddddd] dark:bg-[#222222] p-2 pl-4 pr-4 border-2 border-[#88888850] hover:border-[#888888AA] flex flex-row w-fit group">
                    <p className="transition-all text-clip font-light opacity-50 group-hover:opacity-80 group-hover:scale-[102%] group-active:scale-95 text-[#222222] dark:text-[#DDDDDD] text-xl">More Info</p>
                </a>
            </div>
            <div className="mt-2 gap-2 items-center justify-items-center p-2 bg-[#ffffffc0] dark:bg-[#000000c0] backdrop-blur-lg border-1 rounded-xl flex flex-row w-fit">
                <a className="transition-all opacity-70 hover:opacity-100 active:opacity-60 active:scale-90" href="https://tx.ag/acpcdc">
                    <Image src={"/discord.svg"} className="dark:invert" alt="Discord Link" height={20} width={20}/>
                </a>
                <a className="transition-all opacity-70 hover:opacity-100 active:opacity-60 active:scale-90" href={"https://tamuacpc.org"}>
                    <Image src={"/globe.svg"} className="dark:invert" alt="Homepage Link" height={20} width={20}/>
                </a>
                <a className="transition-all opacity-70 hover:opacity-100 active:opacity-60 active:scale-90" href={"https://www.instagram.com/aggiecompetitiveprogramming/"}>
                    <Image src={"/instagram.svg"} className="dark:invert" alt="Instagram Link" height={20} width={20}/>
                </a>
            </div>
        </div>
    </div>
  );
}
