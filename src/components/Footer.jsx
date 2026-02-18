function Footer() {
  return (
    <footer className="bg-secondary text-accent py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex flex-col items-center lg:items-start">
          <p>© 2026 Yazan Halloul. All rights reserved.</p>
          <p>Yazan.halloul.10@gmail.com</p>
        </div>

        <p className="text-accent">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
