import { useState } from "react";
import {
  CalendarDays,
  MapPin,
  Clock,
  Store,
  TicketCheck,
} from "lucide-react";

export default function ExchangeFestPage() {
  const [stall, setStall] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [regId, setRegId] = useState("");

  const handleRegister = () => {
    const id = `REW-FEST-${Math.floor(100000 + Math.random() * 900000)}`;
    setRegId(id);
    setRegistered(true);
  };

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground">
          Exchange Fest
        </h1>
        <p className="mt-2 text-muted-foreground">
          Join our community swap festival and exchange sustainable fashion
        </p>
      </div>

      {/* Fest Details */}
      <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">Fest Details</h2>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-primary" />
            <span>22 March 2026</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary" />
            <span>3:00 PM – 7:00 PM</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span>Block 1, SRM Easwari Engineering College</span>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">Pricing</h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Visitor Pass</h3>
            <p className="text-muted-foreground mt-1">
              Attend & swap clothes
            </p>
            <p className="mt-2 text-primary font-semibold">₹99</p>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-semibold">Stall Pass</h3>
            <p className="text-muted-foreground mt-1">
              Set up your own swap stall
            </p>
            <p className="mt-2 text-primary font-semibold">₹299</p>
          </div>
        </div>
      </div>

      {/* Stall Option */}
      <div className="rounded-xl border bg-card p-6 shadow-sm space-y-4">
        <h2 className="text-xl font-semibold">Stall Registration</h2>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={stall}
            onChange={() => setStall(!stall)}
            className="h-4 w-4 rounded text-primary"
          />
          <span className="text-sm">
            I want to put up a stall (₹299)
          </span>
        </label>

        <p className="text-sm text-muted-foreground">
          {!stall
            ? "You will be registered as a visitor (₹99)"
            : "Stall space will be allotted after registration"}
        </p>
      </div>

      {/* Register */}
      {!registered ? (
        <div className="flex justify-end">
          <button
            onClick={handleRegister}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Register Now
          </button>
        </div>
      ) : (
        <div className="rounded-xl border border-primary bg-primary/5 p-6 space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <TicketCheck className="h-5 w-5" />
            <h2 className="text-lg font-semibold">
              Registration Successful!
            </h2>
          </div>

          <p className="text-sm">
            Your Registration ID:
          </p>

          <div className="rounded-lg bg-white border px-4 py-3 font-mono text-primary font-semibold">
            {regId}
          </div>

          <p className="text-xs text-muted-foreground">
            Please show this ID at the fest entrance
          </p>
        </div>
      )}
    </div>
  );
}
