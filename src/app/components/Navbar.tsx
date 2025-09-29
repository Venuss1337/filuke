import { ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full flex flex-row justify-between min-h-16 border-b-1 border-b-[#000000]/10 bg-[#000000]/5 items-center pl-100 pr-100">
            <div className="text-[22px] text-[#001858] font-space font-bold">filuke</div>
            <div className="flex flex-1 flex-row justify-center items-center gap-8">
                <NavElement name="Search" />
                <NavElement name="Creator" />
                <NavElement name="Galery" />
                <NavElement name="Pricing" />
                <NavElement name="Chords" />
            </div>
            <button className="cursor-pointer bg-[#f582ae] shadow-md text-[#001858] p-1 pl-2 pr-2 rounded-sm font-space text-lg">
                Sign Up
            </button>
        </header>
    );
}

type NavElementProps = {
    name: string;
}

function NavElement({ name }: NavElementProps) {
    return (
        <button className="cursor-pointer font-space text-[#172c66] text-base hover:underline">{name}</button>
    );
}