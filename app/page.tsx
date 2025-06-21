
'use client'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Welcome</h1>
      
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4 bg-green-100 px-5 py-3 rounded-full transition-colors hover:bg-green-200 text-lg font-medium"
        href="/overview-map"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Map icon"
          width={24}
          height={24}
        />
        View Malaysia Map Overview
      </Link>
    </div>
  );
}
