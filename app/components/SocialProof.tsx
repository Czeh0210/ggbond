import React from 'react';

export default function SocialProof() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Trusted by Educators and Cultural Enthusiasts</h2>
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-6 rounded-r-lg my-8 max-w-2xl mx-auto">
                    <p className="text-4xl font-bold">3.84</p>
                    <p className="text-lg">average appreciation score for culture among youth participants in our pilot program.</p>
                </div>
                <h3 className="font-semibold text-gray-500 uppercase tracking-widest mt-12">Our Partners</h3>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-gray-400 mt-6">
                    {/* Placeholder logos */}
                    <p className="font-bold text-xl">EduSains</p>
                    <p className="font-bold text-xl">MyHeritage</p>
                    <p className="font-bold text-xl">Tourism Board A</p>
                    <p className="font-bold text-xl">University B</p>
                </div>
            </div>
        </section>
    );
} 