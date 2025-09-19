"use client";

import Image from "next/image";
import { useState } from "react";

export default function PaymentQR() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-xl"
      >
        ₹
      </button>

      {/* QR Popup */}
      {open && (
        <div className="absolute bottom-20 right-0 bg-white border rounded-2xl shadow-2xl p-4 w-72 animate-in fade-in zoom-in duration-300">
          <h4 className="text-sm font-semibold text-center mb-2 text-gray-800">
            Scan & Pay via UPI
          </h4>
          <Image
            src="/upi-payment.jpg"
            alt="UPI Payment QR"
            width={250}
            height={250}
            className="mx-auto rounded-lg"
          />
          <p className="text-xs text-gray-600 mt-2 text-center">
            Works with PhonePe, GPay, Paytm & more
          </p>
        </div>
      )}
    </div>
  );
}
