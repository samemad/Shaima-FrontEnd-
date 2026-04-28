import { motion } from 'motion/react';
import { Building2, Home, Landmark, ShieldCheck, PenTool, BarChart3, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Mortgage Services",
    description: "Navigate the complexities of property financing with our expert mortgage consultants. Personalized rates and rapid approvals.",
    icon: <Landmark className="w-8 h-8" />,
    color: "bg-blue-50"
  },
  {
    title: "Property Management",
    description: "Hands-free investment management. From tenant screening to maintenance, we protect and grow your real estate portfolio.",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-emerald-50"
  },
  {
    title: "Development",
    description: "From ground-up construction to large-scale urban development, we build the future of commercial and residential architecture.",
    icon: <PenTool className="w-8 h-8" />,
    color: "bg-amber-50"
  },
  {
    title: "Market Analysis",
    description: "Data-driven insights to help you sell at the highest value or purchase with confidence. Real Estate, rewired with precision.",
    icon: <BarChart3 className="w-8 h-8" />,
    color: "bg-purple-50"
  }
];

export default function Services() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="flex flex-col gap-3 md:gap-4 max-w-2xl">
            <span className="text-black/40 uppercase tracking-[0.4em] font-bold text-[10px] md:text-xs">Full Spectrum Care</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-black tracking-tighter leading-[0.9]">
              SUPPORT BEYOND BUYING AND SELLING
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-base md:text-lg leading-relaxed mb-2">
            Real estate is complex. We rewired our business to provide a comprehensive ecosystem of services that guide you through every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Card className="h-full border-none shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group cursor-pointer overflow-hidden rounded-2xl">
                <CardContent className="p-6 md:p-8 flex flex-col gap-5 md:gap-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${service.color} transition-transform duration-500 group-hover:scale-110`}>
                    {service.icon}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-2 group/btn cursor-pointer">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover/btn:text-black transition-colors">Learn More</span>
                    <ArrowRight className="w-4 h-4 text-black/40 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Commercial/Residential Highlight */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <HighlightBox 
            title="Commercial Real Estate" 
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
            tag="Investment"
          />
          <HighlightBox 
            title="Residential Estates" 
            image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000" 
            tag="Luxury"
            dark
          />
        </div>
      </div>
    </section>
  );
}

function HighlightBox({ title, image, tag, dark = false }: { title: string; image: string; tag: string; dark?: boolean }) {
  return (
    <div className="relative group overflow-hidden rounded-3xl aspect-[16/9] cursor-pointer">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />
      <div className="absolute inset-0 p-12 flex flex-col justify-between">
        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] w-fit">
          {tag}
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-4xl font-bold text-white tracking-tight">{title}</h3>
          <Button variant="link" className="text-white p-0 justify-start h-auto hover:no-underline flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest">Browse Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
