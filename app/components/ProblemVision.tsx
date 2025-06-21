import React from 'react';

export default function ProblemVision() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800">Bridging Cultures, Uncovering Treasures</h2>
                    <p className="mt-4 text-gray-600">
                        In a nation as diverse as Malaysia, a cultural disconnect often exists, with many traditions and stories remaining within their own communities. Tourism often concentrates on popular spots, leaving rich indigenous cultures and hidden gems undiscovered.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-bold text-blue-800">Our Vision</h3>
                    <p className="mt-2 text-gray-600">To foster empathy and education through the joy of exploration. We believe that by gamifying the discovery of our shared heritage, we can build a deeper appreciation for every culture that makes Malaysia unique.</p>
                    {/* Placeholder for stats */}
                    <div className="mt-4 pt-4 border-t">
                        <p className="text-sm text-gray-500">Only <span className="font-bold">15%</span> of tourists explore heritage sites outside major cities.</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 