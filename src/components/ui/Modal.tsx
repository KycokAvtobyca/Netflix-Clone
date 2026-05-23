import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props { 
    children: ReactNode,
    onClose: () => void
}

export function Modal({ children, onClose }: Props) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }

        window.addEventListener("keydown", handleEsc)

        return () => window.removeEventListener("keydown", handleEsc)
    }, [onClose])

    return createPortal(
        <div onClick={onClose} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
            <div onClick={(e) => e.stopPropagation()} className="relative max-w-xl bg-neutral-900 text-white p-6 rounded-2xl shadow-lg animate-fadeIn">
                <button
                onClick={onClose}
                className="absolute -top-0.5 right-2 text-white text-2xl hover:text-red-600 transition"
                aria-label="Close modal"
                >
                &times;
                </button>
                <div className="flex justify-center items-center mr-3">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    )
}