"use client";

import Image from "next/image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export type Certificate = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type AwardsModalProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

const AwardsModal = ({ certificate, onClose }: AwardsModalProps) => {
  const aspectRatio = certificate
    ? certificate.width / certificate.height
    : undefined;

  return (
    <Dialog
      open={Boolean(certificate)}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DialogContent
        className="w-auto max-w-[92vw] gap-0 overflow-hidden rounded-[20px] bg-transparent p-0 shadow-xl ring-0 sm:max-w-[92vw]"
        showCloseButton
        style={
          aspectRatio
            ? {
                width: `min(92vw, calc(90vh * ${aspectRatio}))`,
              }
            : undefined
        }
      >
        <DialogTitle className="sr-only">Award certificate preview</DialogTitle>
        {certificate ? (
          <Image
            src={certificate.src}
            alt={certificate.alt}
            width={certificate.width}
            height={certificate.height}
            quality={100}
            unoptimized
            className="block h-auto w-full rounded-[20px]"
            sizes="92vw"
          />
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default AwardsModal;
