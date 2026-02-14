interface TechPillProps {
    label: string;
}

export default function TechPill({ label }: TechPillProps) {
    return (
        <li className="mr-1.5 mt-2 list-none">
            <div className="flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                {label}
            </div>
        </li>
    );
}
