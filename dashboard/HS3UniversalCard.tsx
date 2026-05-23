import React from 'react';
import { CreditCard, ShieldCheck, HeartPulse } from 'lucide-react';

export default function HS3UniversalCard() {
  return (
    <div className="bg-[#0B0F19] p-8 rounded-3xl border border-gray-800 text-white max-w-xl mx-auto shadow-2xl">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-black flex items-center gap-2 text-cyan-400">
          <CreditCard /> HS3 UNIVERSAL CARD
        </h3>
        <span className="text-xs bg-cyan-950 text-cyan-400 px-3 py-1 rounded-full border border-cyan-800/50 font-mono">GLOBAL WALLET</span>
      </div>

      {/* Visualisierte physische Karte */}
      <div className="bg-gradient-to-br from-cyan-900 via-gray-900 to-black p-6 rounded-2xl border border-cyan-500/30 shadow-lg mb-6 relative overflow-hidden h-48 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="font-mono text-xs text-cyan-400">SOVEREIGN TECH SYSTEM</span>
          <ShieldCheck className="text-cyan-400 animate-pulse" size={24} />
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-widest">Multi-Asset Passport Link</p>
          <p className="text-lg font-mono tracking-widest">DID // 4820 - XXXX - XXXX - 9021</p>
        </div>
      </div>

      {/* Multi-Währungs-Kontostände */}
      <div className="space-y-3 mb-6">
        <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Verknüpfte Guthaben (Echtzeit-Wechselkurs)</p>
        <div className="bg-gray-900/80 p-4 rounded-xl flex justify-between border border-gray-800">
          <span className="font-bold text-sm">US-Dollar (USD Vault)</span>
          <span className="font-mono text-cyan-400 font-bold">14,250.00 USD</span>
        </div>
        <div className="bg-gray-900/80 p-4 rounded-xl flex justify-between border border-gray-800">
          <span className="font-bold text-sm">Bitcoin (BTC Cold Link)</span>
          <span className="font-mono text-purple-400 font-bold">0.4280 BTC</span>
        </div>
      </div>

      {/* Freiwilliger medizinischer Notfall-Bereich */}
      <div className="bg-red-950/20 border border-red-900/40 p-5 rounded-2xl">
        <div className="flex justify-between items-center mb-3">
          <span className="text-red-400 font-bold text-sm flex items-center gap-2"><HeartPulse size={16}/> Tactical Emergency Medical Profile</span>
          <span className="text-xs text-green-400 bg-green-950/50 border border-green-900/50 px-2 py-0.5 rounded-md font-mono">ACTIVE (CONSENT GIVEN)</span>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">
          In the event of an acute medical emergency, verified national emergency responders are authorized to decrypt your vital conditions (e.g., Diabetes Typ 1 / Blood Type A+) securely on-chain to save response time. Personal clear text remains completely hidden from the public registry.
        </p>
      </div>
    </div>
  );
}
