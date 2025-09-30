const Footer = () => {
  return (
    <footer className="border-t border-border bg-card px-4 py-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Built with passion and dedication
        </p>
      </div>
    </footer>
  );
};

export default Footer;
