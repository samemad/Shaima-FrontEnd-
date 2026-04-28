import { motion } from 'motion/react';
import { Heart, Maximize2, BedDouble, Bath, Square } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const listings = [
  {
    id: 1,
    title: "The Glass Pavilion",
    price: "$3,250,000",
    address: "788 Bel Air Rd, Los Angeles, CA",
    beds: 5,
    baths: 6,
    sqft: "6,500",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
    category: "Luxury"
  },
  {
    id: 2,
    title: "Urban Loft Penthouse",
    price: "$1,850,000",
    address: "210 Broadway, New York, NY",
    beds: 3,
    baths: 2,
    sqft: "2,200",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
    category: "Modern"
  },
  {
    id: 3,
    title: "Coastal Breeze Villa",
    price: "$2,100,000",
    address: "45 Ocean Front, Miami, FL",
    beds: 4,
    baths: 4,
    sqft: "3,800",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    category: "Waterfront"
  }
];

export default function FeaturedListings() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="text-black/40 uppercase tracking-[0.4em] font-bold text-[10px] md:text-xs text-center md:text-left">Curated Selection</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-black tracking-tighter leading-[0.9] text-center md:text-left">
              FIND YOUR NEXT CHAPTER
            </h2>
          </div>
          <Button variant="outline" className="rounded-full border-2 border-black font-bold uppercase text-[10px] tracking-widest px-8 hover:bg-black hover:text-white transition-all h-11 md:h-12 w-full md:w-auto">
            View All Listings
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {listings.map((l, idx) => (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src={l.image} 
                  alt={l.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <Badge className="bg-white/80 backdrop-blur-md text-black border-none px-3 py-1 text-[10px] uppercase font-bold tracking-widest">
                    {l.category}
                  </Badge>
                </div>
                <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 px-2">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold tracking-tight mb-1">{l.title}</h3>
                    <p className="text-gray-400 text-sm">{l.address}</p>
                  </div>
                  <span className="text-2xl font-black tracking-tighter">{l.price}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-100 mt-2">
                  <Feature icon={<BedDouble className="w-4 h-4" />} value={`${l.beds} Beds`} />
                  <Feature icon={<Bath className="w-4 h-4" />} value={`${l.baths} Baths`} />
                  <Feature icon={<Square className="w-4 h-4" />} value={`${l.sqft} sqft`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-gray-400">{icon}</div>
      <span className="text-xs font-medium text-gray-500">{value}</span>
    </div>
  );
}
