function Footer() {
  return (
    <footer className="bg-secondary text-accent py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

        <p>
          © {new Date().getFullYear()} Yazan Halloul. All rights reserved.
        </p>

        <p className="text-accent">
          Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;