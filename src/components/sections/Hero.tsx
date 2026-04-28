import { motion } from 'motion/react';
import { Search, MapPin, Building2, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center gap-6 md:gap-8 pt-12 md:pt-0"
        >
          <div className="flex flex-col gap-2">
            <span className="text-white/60 uppercase tracking-[0.4em] font-bold text-[10px] md:text-xs">Real Estate, Rewired</span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-sans font-black text-white tracking-tighter leading-[0.9]">
              FIND WHAT MOVES YOU
            </h1>
          </div>

          <p className="text-lg md:text-xl text-white/80 max-w-lg leading-relaxed font-light">
            Expert agents. Real guidance. A clear path to find what’s next in the modern real estate landscape.
          </p>

          <div className="bg-white p-1 md:p-2 rounded-xl shadow-2xl max-w-xl">
            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="bg-transparent border-b rounded-none w-full justify-start gap-4 px-4 h-auto">
                <TabsTrigger value="buy" className="data-[state=active]:border-black data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none px-0 py-3 font-bold uppercase text-[9px] md:text-[10px] tracking-widest transition-all">Buy</TabsTrigger>
                <TabsTrigger value="rent" className="data-[state=active]:border-black data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none px-0 py-3 font-bold uppercase text-[9px] md:text-[10px] tracking-widest transition-all">Rent</TabsTrigger>
                <TabsTrigger value="sell" className="data-[state=active]:border-black data-[state=active]:bg-transparent border-b-2 border-transparent rounded-none px-0 py-3 font-bold uppercase text-[9px] md:text-[10px] tracking-widest transition-all">Sell</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex flex-col md:flex-row items-center gap-2 p-3 md:p-4">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input 
                  placeholder="Address or city..." 
                  className="pl-10 border-none outline-none focus-visible:ring-0 text-gray-800 placeholder:text-gray-400 h-10 md:h-12"
                />
              </div>
              <Button className="w-full md:w-auto bg-black text-white px-8 py-5 md:py-6 rounded-lg font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-transform">
                Find Homes
              </Button>
            </div>
          </div>

          <div className="flex gap-8 md:gap-12 mt-4 text-white">
            <Stat label="Total Sold" value="1.2k+" />
            <Stat label="Our Agents" value="150+" />
            <Stat label="Rating" value="4.9/5" />
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.2 }}
           className="hidden lg:flex items-center justify-center"
        >
          {/* Decorative floating cards */}
          <div className="relative w-full aspect-square">
            <div className="absolute top-0 right-0 w-64 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl animate-float">
               <div className="aspect-video rounded-lg overflow-hidden mb-3">
                  <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600" alt="Listing" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
               </div>
               <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest mb-1">Luxury Collection</span>
                  <span className="text-white font-bold text-lg">$2,450,000</span>
                </div>
                <div className="bg-white/20 px-2 py-1 rounded text-white text-[10px] font-bold">4.8★</div>
               </div>
            </div>

            <div className="absolute bottom-10 left-0 w-56 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl animate-float-delayed">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <UserIcon />
                 </div>
                 <div className="flex flex-col">
                    <span className="text-white font-bold text-xs">James Wilson</span>
                    <span className="text-white/60 text-[10px]">Elite Agent</span>
                 </div>
               </div>
               <p className="text-white/80 text-[10px] italic">"The process was rewired for simplicity. I felt supported throughout."</p>
            </div>
          </div>
        </motion.div>
      </div>

       {/* Social Proof Bar */}
       <div className="absolute bottom-12 left-0 right-0 hidden md:block">
          <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-6 text-center">Featured In</p>
            <div className="flex justify-between items-center opacity-30 grayscale invert">
              <span className="text-xl font-black">Forbes</span>
              <span className="text-xl font-black">Wired</span>
              <span className="text-xl font-black">Bloomberg</span>
              <span className="text-xl font-black">Fast Company</span>
              <span className="text-xl font-black">CNN</span>
            </div>
          </div>
       </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-black tracking-tighter">{value}</span>
      <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{label}</span>
    </div>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  );
}
