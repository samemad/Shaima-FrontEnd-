import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 border-gray-200 shadow-sm' 
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-black flex items-center justify-center rounded-sm group-hover:rotate-12 transition-transform duration-300">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="font-sans font-black text-2xl tracking-tighter leading-none">FIND</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 leading-none">Real Estate</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-black/5">Buy</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] grid grid-cols-2 gap-3">
                    <div className="col-span-2 pb-2 border-b mb-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Search Residential</p>
                    </div>
                    <NavItem title="Luxury Homes" description="Exceptional properties curated for you." />
                    <NavItem title="New Construction" description="Be the first to call it home." />
                    <NavItem title="Open Houses" description="Tour property this weekend." />
                    <NavItem title="Mortgage Calculator" description="Estimate your monthly payments." />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-black/5">Rent</NavigationMenuTrigger>
                <NavigationMenuContent>
                   <div className="p-4 w-[400px] grid grid-cols-2 gap-3">
                    <div className="col-span-2 pb-2 border-b mb-1">
                      <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Leasing Solutions</p>
                    </div>
                    <NavItem title="Apartments" description="Urban living in the heart of the city." />
                    <NavItem title="Commercial" description="Find the perfect space for your business." />
                    <NavItem title="Property Management" description="Full-service care for your investment." />
                    <NavItem title="Short Term" description="Flexible stays for your transition." />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-gray-500 transition-colors">Sell</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-gray-500 transition-colors">Our Agents</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="rounded-full border-2 border-black font-bold uppercase text-xs tracking-widest px-6 hover:bg-black hover:text-white transition-all">
            Contact
          </Button>
          <Button size="icon" className="rounded-full bg-black hover:bg-gray-800">
            <User className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-6"
          >
            <div className="flex flex-col gap-6">
              <MobileNavItem label="Buy" />
              <MobileNavItem label="Rent" />
              <MobileNavItem label="Sell" />
              <MobileNavItem label="Our Agents" />
              <div className="h-px bg-gray-100" />
              <Button className="w-full bg-black">Contact Expert</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function NavItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="group p-3 rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
      <h4 className="text-sm font-bold leading-none mb-1 group-hover:text-black transition-colors">{title}</h4>
      <p className="text-xs text-gray-500 leading-normal">{description}</p>
    </div>
  );
}

function MobileNavItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between group cursor-pointer">
      <span className="text-lg font-bold group-hover:text-gray-600">{label}</span>
      <ChevronDown className="w-5 h-5 -rotate-90 opacity-20 group-hover:opacity-100" />
    </div>
  );
}
