import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
        <div className="absolute top-0 left-0 min-h-screen min-w-screen bg-[#fef6e4]">
            <Navbar />
            <main className="flex flex-col w-3/5 m-auto">
                <div className="flex relative w-full flex-row mt-50">
                    <div className="relative w-1/2 text-[#001858] font-bold text-4xl font-space">All your chords and music in one place</div>
                    <div className="relative w-1/2"></div>
                </div>
            </main>
        </div>
  )
}