import React from 'react';
import { ShieldAlert, RefreshCw, Layers, HardDrive } from 'lucide-react';

export default function HS3CommandCenter() {
  return (
    <div className="min-h-screen bg-[#020712] text-white p-12 font-sans tracking-wide">
      {/* State Header */}
      <div className="flex justify-between items-center border-b border-green-900/30 pb-6 mb-10">
        <div>
          <h1 className="text-3xl font-black text-green-400 tracking-widest">HS3 PROTOCOL <span className="text-gray-600 text-sm font-light">v1.0.0</span></h1>
          <p className="text-xs text-gray-500 font-mono mt-1">GLOBAL SOVEREIGN NATIONAL IDENTITY & CURRENCY MANAGEMENT MATRIX</p>
        </div>
        <div className="bg-green-950/30 border border-green-500/40 px-6 py-2 rounded-full flex items-center gap-3">
          <div className="h-2 w-2 bg-green-400 rounded-full animate-ping" />
          <span className="text-xs font-mono text-green-400 uppercase">QUANTUM-LATTICE-LOCK: ACTIVE</span>
        </div>
      </div>

      {/* Die harten Infrastruktur-Fakten */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="bg-[#060D1E] p-6 rounded-3xl border border-gray-800 shadow-xl">
          <p className="text-gray-500 text-xs uppercase font-bold mb-1">Global Card Transactions</p>
          <p className="text-3xl font-black font-mono">247,890 <span className="text-xs text-green-400">0.1% FEE TAX</span></p>
        </div>
        <div className="bg-[#060D1E] p-6 rounded-3xl border border-gray-800 shadow-xl">
          <p className="text-gray-500 text-xs uppercase font-bold mb-1">Multi-Currency FX Status</p>
          <p className="text-3xl font-black text-green-400 font-mono">50 ACTIVE</p>
        </div>
        <div className="bg-[#060D1E] p-6 rounded-3xl border border-gray-800 shadow-xl">
          <p className="text-gray-500 text-xs uppercase font-bold mb-1">Border Security Scans</p>
          <p className="text-3xl font-black font-mono">100% ZK-VALID</p>
        </div>
        <div className="bg-[#060D1E] p-6 rounded-3xl border border-red-500/20 shadow-xl">
          <p className="text-gray-500 text-xs uppercase font-bold mb-1">Counterfeit Visa Alerts</p>
          <p className="text-3xl font-black text-red-500 font-mono">0 BLOCKED</p>
        </div>
      </div>

      {/* Konsolen-Steuerung */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-black/40 p-8 rounded-3xl border border-gray-800">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-cyan-400"><Layers size={18} /> Real-Time Foreign Exchange Clearing (FX)</h2>
          <p className="text-sm text-gray-400 mb-4">Automatic conversion engine reading live Charli3 decentralized Oracle nodes. Zero bank spread.</p>
          <div className="bg-gray-900/60 p-4 rounded-xl border border-gray-800 font-mono text-xs text-gray-400">
            [SYS_LOG] FX_PAIR: USD/AEDDC rate pulled successfully via reference inputs. Execution delay: 12ms.
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#081510] to-black p-8 rounded-3xl border border-green-500/20">
          <h2 className="text-lg font-bold mb-6 flex items-center gap-2 text-yellow-500"><HardDrive size={18} /> Sovereign Hardware Control</h2>
          <div className="space-y-4">
            <button className="w-full bg-green-900/20 hover:bg-green-800/40 text-green-400 p-4 rounded-xl border border-green-500/30 font-bold transition-all text-sm">
              Trigger Central Bank HSM Sync (PKCS#11)
            </button>
            <button className="w-full bg-red-950/40 hover:bg-red-900/40 text-red-400 p-4 rounded-xl border border-red-500/30 font-bold transition-all text-sm">
              Emergency Network Identity Freeze
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
