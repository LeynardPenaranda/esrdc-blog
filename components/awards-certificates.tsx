"use client";

import Image from "next/image";
import { useState } from "react";
import AwardsModal, { type Certificate } from "@/components/awards-modal";

const certificates: Certificate[] = [
  {
    src: "/awards/awards-1.png",
    alt: "ESRDC award certificate 1",
    width: 1239,
    height: 1025,
  },
  {
    src: "/awards/awards-2.png",
    alt: "ESRDC award certificate 2",
    width: 759,
    height: 536,
  },
  {
    src: "/awards/awards-3.png",
    alt: "ESRDC award certificate 3",
    width: 732,
    height: 518,
  },
  {
    src: "/awards/awards-4.png",
    alt: "ESRDC award certificate 4",
    width: 729,
    height: 516,
  },
  {
    src: "/awards/awards-6.png",
    alt: "ESRDC award certificate 5",
    width: 342,
    height: 484,
  },
  {
    src: "/awards/awards-7.png",
    alt: "ESRDC award certificate 6",
    width: 1550,
    height: 2048,
  },
];

const AwardsCertificates = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <>
      <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
        {certificates.map((certificate, index) => (
          <button
            type="button"
            key={certificate.src}
            className="group cursor-pointer overflow-hidden rounded-[28px] border border-black/10 bg-white text-left shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-transform hover:-translate-y-1 hover:shadow-xl"
            onClick={() => setSelectedCertificate(certificate)}
            aria-label={`View ${certificate.alt}`}
          >
            <Image
              src={certificate.src}
              alt={certificate.alt}
              width={certificate.width}
              height={certificate.height}
              quality={100}
              className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={index < 2}
            />
          </button>
        ))}
      </div>

      <AwardsModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
};

export default AwardsCertificates;
