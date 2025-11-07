typescript 
export default function FooterSection() {
  return (
    <footer className="footer-graphite py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side - Copyright and Links */}
          <div className="flex flex-wrap items-center space-x-6 text-sm">
            <span>Lucent.AI © 2025</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          {/* Right Side - Data Note */}
          <div className="text-xs text-center md:text-right max-w-xs">
            We aggregate anonymous assessment data to improve insights. No personal data is shared.
          </div>
        </div>
      </div>
    </footer>
  );
}
