
export default function QnA({ question, answer, ps = "" }: { question: string, answer: string, ps: string}) {
    return <div className = "flex flex-col items-center group">
        <p className="transition-all leading-none text-xl opacity-30 group-hover:opacity-70">
            {question}
        </p>
        <p className="transition-all leading-none text-xl opacity-80 group-hover:opacity-100">
            {answer}
        </p>
        { (ps != "") &&
        <p className="transition-all leading-none text-sm opacity-30 group-hover:opacity-70">
            {ps}
        </p>
        }
    </div>
}