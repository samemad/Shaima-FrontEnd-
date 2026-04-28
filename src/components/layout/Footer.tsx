import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="flex flex-col gap-8">
             <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white flex items-center justify-center rounded-sm">
                <span className="text-black font-bold text-xl">F</span>
              </div>
              <div className="flex flex-col -gap-1">
                <span className="font-sans font-black text-2xl tracking-tighter leading-none inline-block">FIND</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 leading-none">Real Estate</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Expert agents. Real guidance. A clear path to find what’s next in your real estate journey.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Linkedin className="w-5 h-5" />} />
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white/40">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <FooterLink label="Search Listings" />
              <FooterLink label="Rent Properties" />
              <FooterLink label="Sell Your Home" />
              <FooterLink label="Our Active Agents" />
              <FooterLink label="Mortgage Services" />
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white/40">Specializations</h4>
            <ul className="flex flex-col gap-4">
              <FooterLink label="Property Management" />
              <FooterLink label="Commercial Real Estate" />
              <FooterLink label="New Developments" />
              <FooterLink label="Land/Construction" />
              <FooterLink label="Relocation Guidance" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold mb-8 text-white/40">Get In Touch</h4>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start group cursor-pointer">
                <MapPin className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors mt-1" />
                <span className="text-sm text-gray-400">123 Market Street, Suite 400<br />San Francisco, CA 94105</span>
              </div>
              <div className="flex gap-4 items-center group cursor-pointer">
                <Phone className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                <span className="text-sm text-gray-400">(555) 012-3456</span>
              </div>
              <div className="flex gap-4 items-center group cursor-pointer">
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                <span className="text-sm text-gray-400">hello@findrealestate.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} FIND Real Estate. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white cursor-pointer transition-colors">Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <li>
      <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{label}</a>
    </li>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
      {icon}
    </div>
  );
}
