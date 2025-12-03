import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-in-out ${
        isScrolled ? 'bg-surface shadow-sm' : 'bg-transparent'
      }`}
      style={{ minHeight: '64px' }}
    >
      <div className="container mx-auto px-8 py-5 flex items-center justify-between">
        <div className="text-xl font-light text-gray-900">
          Slatts Ventures
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex gap-8">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  onClick={() => scrollToSection(item.id)}
                  className="text-base font-light text-gray-700 cursor-pointer hover:text-primary transition-colors duration-200 ease-in-out relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-250 ease-in group-hover:w-full" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          onClick={() => scrollToSection('contact')}
          className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-light rounded-full px-6"
        >
          Book Strategy Call
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-900"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X width={32} height={32} strokeWidth={1.5} />
          ) : (
            <Menu width={32} height={32} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <NavigationMenu className="md:hidden bg-surface border-t border-border">
          <NavigationMenuList className="flex flex-col p-8 gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <NavigationMenuLink
                  onClick={() => scrollToSection(item.id)}
                  className="text-base font-light text-gray-700 cursor-pointer hover:text-primary transition-colors duration-200 ease-in-out block py-3"
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-light rounded-full"
              >
                Get in Touch
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
}
