import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div 
                className="h-8 w-8"
                style={{
                  backgroundImage: 'url(https://c.animaapp.com/mipw8t0njGuOWs/img/fee73c0d-d64e-41dd-be8b-770244ec5b79.png)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  mixBlendMode: 'darken'
                }}
              />
              <h3 className="text-xl font-normal text-gray-900">
                Slatts Ventures
              </h3>
            </div>
            <p className="text-sm font-light text-gray-600">
              Innovation Engineering // AI Orchestration
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin width={24} height={24} strokeWidth={1.5} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter width={24} height={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm font-light text-gray-600">
            © {currentYear} Slatts Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
