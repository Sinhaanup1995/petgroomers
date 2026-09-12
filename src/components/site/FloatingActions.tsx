import { MessageCircle, Phone } from "lucide-react";
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from "@/data/site";

export function FloatingActions({ whatsappHref = WHATSAPP_URL }: { whatsappHref?: string }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2.5 sm:bottom-5 sm:right-5 sm:gap-3">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-12 w-12 place-items-center rounded-full text-white shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 sm:h-14 sm:w-14"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="sr-only">WhatsApp</span>
      </a>
      <a
        href={TEL_URL}
        aria-label={`Call ${PHONE_DISPLAY}`}
        className="grid h-12 w-12 place-items-center rounded-full bg-coral text-coral-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 sm:h-14 sm:w-14"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="sr-only">Call</span>
      </a>
    </div>
  );
}
