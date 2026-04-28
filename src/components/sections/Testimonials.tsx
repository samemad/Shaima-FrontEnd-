import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Property Owner",
    content: "The technological edge FIND brings to the table is unmatched. They rewired how I think about property management. Everything is transparent and efficient.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "Marcus Thorne",
    role: "First-time Buyer",
    content: "I felt supported every step of the way. My agent didn't just show me houses; they gave me real guidance that saved me thousands on my mortgage.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    name: "Elena Rodriguez",
    role: "Commercial Investor",
    content: "Finding a space for our headquarters was seamless. The market analysis was precise and their development team handled the retrofit perfectly.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6 mb-16 md:mb-24">
          <span className="text-black/40 uppercase tracking-[0.4em] font-bold text-[10px] md:text-xs">Voice of the community</span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-black tracking-tighter leading-[0.9]">
            DON’T TAKE OUR WORD FOR IT
          </h2>
          <div className="h-1 w-20 md:w-24 bg-black rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col gap-6 md:gap-8 relative border border-gray-100"
            >
              <div className="absolute -top-4 left-10 w-12 h-12 bg-black flex items-center justify-center rounded-xl shadow-xl">
                <Quote className="text-white w-6 h-6 fill-white" />
              </div>
              
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed text-lg flex-1">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <h4 className="font-bold text-sm tracking-tight">{t.name}</h4>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 md:mt-32 p-8 md:p-12 bg-black rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
        >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">FIND YOU. WE’LL HELP YOU GET THERE.</h3>
            <p className="text-white/60 text-sm">Join over 10,000 families and businesses who found their path with FIND.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Your email address" 
              className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-white/40 w-full sm:min-w-[280px]"
            />
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-gray-200 transition-colors w-full sm:w-auto">
              Join Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
