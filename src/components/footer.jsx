import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="px-4 md:px-6 lg:px-6">
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-col lg:flex-row justify-center lg:justify-between items-center py-6 text-sm text-muted-foreground space-y-4 lg:space-y-0">
          <p className="text-center lg:text-left">
            © {new Date().getFullYear()} Jabbar Network Solutions Private
            Limited. All rights reserved.
          </p>
          <div className="flex items-center justify-center lg:justify-start text-sm">
            <span>Powered by</span>
            <span
              // href="https://visdak.com"
              // target="_blank"
              // rel="noopener noreferrer"
              className="ml-1 font-semibold text-xs text-primary hover:text-primary/80 transition-colors uppercase tracking-wide"
            >
              Visdak
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
