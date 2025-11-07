typescript 
export default function Header() {
  return (
    <header className="header-bar fixed top-0 left-0 right-0 z-50 border-b border-border/10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col">
          <img 
            src="/images/LucentAI Logo 2.png" 
            alt="Lucent.AI" 
            className="h-5"
          />
          <span className="font-tagline text-xs text-accent mt-1">
            Human-led. AI-enabled.
          </span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/playbook" className="nav-link">Playbook</a>
          <a href="#" className="nav-link">Services</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}
