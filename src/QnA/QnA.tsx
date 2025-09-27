
export default function QnA({ question, answer, ps = "" }: { question: string, answer: string, ps: string}) {
    return <div className = "flex flex-col items-center group">
        <p className="transition-all leading-none text-xl opacity-50 group-hover:opacity-70 text-center">
            {question}
        </p>
        <p className="transition-all leading-none text-xl opacity-80 group-hover:opacity-100 text-center">
            {answer}
        </p>
        { (ps != "") &&
        <p className="transition-all leading-none text-sm opacity-50 group-hover:opacity-70 text-center">
            {ps}
        </p>
        }
    </div>
}