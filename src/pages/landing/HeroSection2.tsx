export default function UniversityMap() {
    const leftUniversities = [
        { id: "01", name: "University of Auckland", location: "Auckland" },
        { id: "02", name: "Auckland University of Technology (AUT)", location: "Auckland" },
        { id: "03", name: "University of Waikato", location: "Hamilton" },
        { id: "04", name: "Massey University", location: "Palmerston North, Auckland" },
        { id: "05", name: "Victoria University of Wellington", location: "Wellington" },
        { id: "06", name: "University of Canterbury", location: "Christchurch" },
        { id: "07", name: "Lincoln University", location: "Christchurch" },
        { id: "08", name: "University of Otago", location: "Dunedin" },
    ]

    const rightInstitutes = [
        { id: "01", name: "Ara Institute of Canterbury", location: "Christchurch" },
        { id: "02", name: "Otago Polytechnic", location: "Dunedin & Central Otago" },
        { id: "03", name: "Southern Institute of Technology (SIT)", location: "Christchurch" },
        { id: "04", name: "Manukau Institute of Technology (MIT)", location: "Auckland" },
        { id: "05", name: "Unitec Institute of Technology", location: "Auckland" },
    ]

    return (
        <section className="w-full bg-secondary py-8 px-4 md:py-12 lg:py-16">
            <div className="container mx-auto max-w-7xl">
                <div className="hidden lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:gap-8 lg:items-center">
                    {/* Left Universities List */}
                    <div className="space-y-4">
                        {leftUniversities.map((uni) => (
                            <div key={uni.id} className="flex items-center gap-3 bg-accent rounded-full px-4 py-3">
                                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                    {uni.id}
                                </span>
                                <div className="text-primary text-sm font-medium leading-tight">
                                    {uni.name} – {uni.location}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Map Image */}
                    <div className="flex justify-center">
                        <img
                            src="/images/hero-2.png"
                            alt="New Zealand Universities Map"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Right Institutes List */}
                    <div className="space-y-4">
                        {rightInstitutes.map((institute) => (
                            <div key={institute.id} className="flex items-center gap-3 bg-accent rounded-full px-4 py-3">
                                <div className="text-primary text-sm font-medium leading-tight text-right flex-1">
                                    {institute.name} - {institute.location}
                                </div>
                                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                    {institute.id}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:hidden flex justify-center">
                    <img
                        src="/images/hero-2.png"
                        alt="New Zealand Universities Map"
                        className="w-full max-w-5xl h-auto"
                    />
                </div>
            </div>
        </section>
    )
}
