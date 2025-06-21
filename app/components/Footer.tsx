import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-gray-200 py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">Stay in the loop!</h3>
                <p className="mb-6">Sign up for our newsletter to get the latest updates on new routes and features.</p>
                <form className="flex flex-col sm:flex-row items-center gap-2 max-w-md mx-auto">
                    <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 rounded-md text-gray-800" />
                    <button type="submit" className="w-full sm:w-auto bg-yellow-400 text-blue-900 font-bold px-6 py-2 rounded-md hover:bg-yellow-300">Subscribe</button>
                </form>
                <div className="flex justify-center gap-6 my-8">
                    <a href="#" className="hover:text-white">Twitter</a>
                    <a href="#" className="hover:text-white">Instagram</a>
                    <a href="#" className="hover:text-white">Facebook</a>
                </div>
                <div className="border-t border-blue-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
                    <p>&copy; 2024 Cuti-Cuti Explorer. All Rights Reserved.</p>
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
} 