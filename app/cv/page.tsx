import Image from "next/image";
import React from "react";

const CvPage = () => {
  return (
    <main className="bg-gradient-to-br from-[#f0e7db] to-[#d8dffa] min-h-screen w-full">
      <div className="max-w-[500px] mx-auto flex flex-col gap-6 justify-center pt-20 px-4 lg:px-0">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#bf677d] to-[#9b4d67] text-6xl font-bold text-center drop-shadow-md mb-10">
          Mon CV
        </h1>
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/assets/cv.png"
            alt="CV Image"
            width={500}
            height={800}
            className="w-full h-[800px] object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default CvPage;
