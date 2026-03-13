import React, { useState } from 'react';
import {
  Droplets,
  Activity,
  LayoutDashboard,
  PieChart as PieChartIcon,
  TestTube2,
  CheckCircle2,
  AlertCircle,
  Database,
  ShieldCheck,
  Wind,
  Settings2,
  ChevronRight
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

// --- Veriler ---
const potabiliteVerisi = [
  { ad: 'İçilebilir', deger: 39, renk: '#22d3ee' },
  { ad: 'İçilemez', deger: 61, renk: '#475569' }
];

const ozellikOnemi = [
  { ad: 'Sülfat', puan: 85 },
  { ad: 'pH', puan: 78 },
  { ad: 'Sertlik', puan: 65 },
  { ad: 'Katı Madde', puan: 45 },
  { ad: 'Kloramin', puan: 30 }
];

const istatistikler = [
  { etiket: 'Toplam Örnek', deger: '3.276', ikon: <Database className="w-5 h-5" /> },
  { etiket: 'Model Doğruluğu', deger: '%82.4', ikon: <ShieldCheck className="w-5 h-5" /> },
  { etiket: 'Analiz Edilen Parametre', deger: '9', ikon: <Settings2 className="w-5 h-5" /> }
];

// --- Bileşenler ---

const Navbar = ({ aktifSekme, setAktifSekme }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 nav-blur px-6 py-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center">
          <Droplets className="text-cyan-400 w-6 h-6" />
        </div>
        <div>
          <span className="text-lg font-bold tracking-tight text-white block leading-none">AquaGuard AI</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-cyan-400/60 font-medium">Su Kalite Analizi</span>
        </div>
      </div>
      <div className="flex gap-1 bg-slate-900/50 p-1 rounded-xl border border-white/5">
        {[
          { id: 'Dashboard', ikon: <LayoutDashboard className="w-4 h-4" />, etiket: 'Panel' },
          { id: 'Predictor', ikon: <TestTube2 className="w-4 h-4" />, etiket: 'Test Merkezi' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setAktifSekme(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${aktifSekme === item.id
              ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
              : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
          >
            {item.ikon}
            {item.etiket}
          </button>
        ))}
      </div>
    </div>
  </nav>
);

const OzellikKarti = ({ etiket, deger, ikon }) => (
  <div className="card-refined p-6 flex flex-col gap-4">
    <div className="flex justify-between items-start">
      <div className="p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-xl text-cyan-400">
        {ikon}
      </div>
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Canlı Veri</span>
    </div>
    <div>
      <p className="text-slate-400 text-xs font-medium mb-1">{etiket}</p>
      <p className="text-3xl font-bold tracking-tight text-white">{deger}</p>
    </div>
  </div>
);

const AnaSayfa = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12 pt-32 pb-20"
  >
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
        Veri Bilimi ile <br />
        <span className="text-cyan-400">Su Kalitesini</span> Geleceğe Taşıyın
      </h1>
      <p className="text-slate-400 text-lg leading-relaxed font-medium">
        Kimyasal parametreleri analiz ederek içme suyu güvenliğini %82 doğrulukla tahmin eden gelişmiş makine öğrenmesi modeli.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {istatistikler.map((stat, i) => (
        <OzellikKarti key={i} {...stat} />
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 card-refined p-8 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Model Karar Ağırlıkları</h3>
            <p className="text-slate-500 text-sm mt-1">Hangi parametre sonucu nasıl etkiliyor?</p>
          </div>
          <Activity className="text-cyan-400 w-5 h-5 opacity-50" />
        </div>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={ozellikOnemi}>
              <defs>
                <linearGradient id="areaGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
              <XAxis dataKey="ad" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="#475569" fontSize={12} tickLine={false} axisLine={false} dx={-10} />
              <Tooltip
                contentStyle={{ background: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '12px' }}
                cursor={{ stroke: '#22d3ee', strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="puan"
                stroke="#22d3ee"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#areaGlow)"
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="lg:col-span-2 card-refined p-8 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">Veri Dağılımı</h3>
          <p className="text-slate-500 text-sm">İçilebilirlik analizi özeti</p>
        </div>
        <div className="h-48 relative flex items-center justify-center my-6">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={potabiliteVerisi}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={8}
                dataKey="deger"
                stroke="none"
              >
                {potabiliteVerisi.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.renk} className="outline-none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute text-center">
            <p className="text-2xl font-black text-white">%100</p>
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tighter">İşlenen Veri</p>
          </div>
        </div>
        <div className="space-y-3">
          {potabiliteVerisi.map((v, i) => (
            <div key={i} className="flex justify-between items-center p-3 bg-white/5 border border-white/5 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: v.renk }} />
                <span className="text-xs font-semibold text-slate-300">{v.ad}</span>
              </div>
              <span className="text-xs font-bold text-white">%{v.deger}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const TahminMerkezi = () => {
  const [parametreler, setParametreler] = useState({
    'pH Seviyesi': 7.0,
    'Sertlik (mg/L)': 200,
    'Katı Madde (ppm)': 20000,
    'Kloramin (ppm)': 7.0,
    'Sülfat (mg/L)': 300,
    'İletkenlik (μS/cm)': 400
  });

  const [tahmin, setTahmin] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(false);

  const analizEt = () => {
    setYukleniyor(true);
    setTimeout(() => {
      // Model lojiği simülasyonu
      const ph = parametreler['pH Seviyesi'];
      const sulfat = parametreler['Sülfat (mg/L)'];
      const icilebilir = ph > 6.5 && ph < 8.5 && sulfat < 400;
      setTahmin(icilebilir);
      setYukleniyor(false);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-4xl mx-auto pt-32 pb-20 px-4"
    >
      <div className="card-refined p-8 md:p-12 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">
            AI Simülatörü
          </div>
          <h2 className="text-4xl font-black text-white">Akıllı Test Merkezi</h2>
          <p className="text-slate-400 max-w-lg mx-auto font-medium">
            Su değerlerini manuel olarak girerek yapay zekanın gerçek zamanlı analizini gözlemleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {Object.entries(parametreler).map(([key, val]) => (
            <div key={key} className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold text-slate-300">{key}</span>
                <span className="text-sm font-mono text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10">
                  {val.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={key === 'pH Seviyesi' ? 0 : 0}
                max={key === 'pH Seviyesi' ? 14 : key === 'Katı Madde (ppm)' ? 50000 : 1000}
                step={key === 'pH Seviyesi' ? 0.1 : 5}
                value={val}
                onChange={(e) => setParametreler({ ...parametreler, [key]: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>
          ))}
        </div>

        <div className="pt-4">
          <button
            onClick={analizEt}
            disabled={yukleniyor}
            className="btn-premium w-full py-5 text-lg flex items-center justify-center gap-3"
          >
            {yukleniyor ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analiz Ediliyor...
              </>
            ) : (
              <>
                <Wind className="w-6 h-6" />
                Su Kalitesini Sorgula
              </>
            )}
          </button>
        </div>

        <AnimatePresence>
          {tahmin !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-8 rounded-2xl border-2 flex items-start gap-6 ${tahmin
                ? 'bg-cyan-500/5 border-cyan-500/20'
                : 'bg-rose-500/5 border-rose-500/20'
                }`}
            >
              <div className={`p-4 rounded-xl ${tahmin ? 'bg-cyan-500/10 text-cyan-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {tahmin ? <CheckCircle2 className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
              </div>
              <div className="space-y-2">
                <h4 className={`text-2xl font-black ${tahmin ? 'text-cyan-400' : 'text-rose-400'}`}>
                  {tahmin ? 'İçilebilir Düzeyde' : 'Kullanım Riski Tespit Edildi'}
                </h4>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {tahmin
                    ? 'Yapay zeka analizimiz, girilen bu kimyasal verilerin WHO (Dünya Sağlık Örgütü) standartlarına uygun olduğunu göstermektedir.'
                    : 'Kimyasal değerler arasındaki dengesizlik, suyun biyolojik veya kimyasal olarak riskli olabileceğini göstermektedir.'}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function Dashboard() {
  const [aktifSekme, setAktifSekme] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-slate-200 selection:bg-cyan-500/30">
      <Navbar aktifSekme={aktifSekme} setAktifSekme={setAktifSekme} />

      <main className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {aktifSekme === 'Dashboard' && <AnaSayfa key="home" />}
          {aktifSekme === 'Predictor' && <TahminMerkezi key="predictor" />}
        </AnimatePresence>
      </main>

      <footer className="py-20 border-t border-white/5 mt-20 opacity-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Droplets className="text-cyan-400 w-5 h-5" />
            <span className="font-bold text-white">AquaGuard AI</span>
          </div>
          <div className="flex gap-12 text-sm font-bold text-slate-500 uppercase tracking-widest">
            <span>Makine Öğrenmesi</span>
            <span>Veri Mühendisliği</span>
            <span>2026 Portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
