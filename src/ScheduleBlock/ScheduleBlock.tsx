
export default function ScheduleBlock({ when, what}: { when: string, what: string}) {
    return <div className = "flex flex-row items-center group gap-1">
        <p className="transition-all leading-none text-xl opacity-40 group-hover:opacity-70">
            {when} |
        </p>
        <p className="transition-all leading-none text-xl opacity-80 group-hover:opacity-100">
            {what}
        </p>
    </div>
}