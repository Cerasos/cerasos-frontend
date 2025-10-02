const Footer = () => {
  return (
    <footer className="border-t border-primary/10  px-4 py-8 bg-[#002a53]">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-primary">
          Built with passion and dedication
        </p>
      </div>
    </footer>
  );
};

export default Footer;
