import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#tech_stack" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const handleLinkClick = (href) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const isAlreadyThere = Math.abs(window.scrollY - element.offsetTop) < 10;

      if (isAlreadyThere) {
        setOpen(false);
        return;
      }

      const handleScrollEnd = () => {
        setOpen(false);
        window.removeEventListener("scrollend", handleScrollEnd);
      };

      window.addEventListener("scrollend", handleScrollEnd);
    } else {
      setOpen(false);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" />
      )}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-secondary  text-accent backdrop-blur-md ${
          open ? "" : " shadow-lg shadow-secondary/30"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold text-accent">Yazan Halloul</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-accent hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Burger Button */}
          <button
            className="md:hidden text-accent"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial="close"
              animate="open"
              exit="close"
              variants={{
                open: { height: "auto", opacity: 1 },
                close: { height: 0, opacity: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:hidden overflow-hidden bg-primary"
            >
              <div className="flex flex-col px-6 py-4 gap-4 bg-primary">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={()=>handleLinkClick(link.href)}
                    className="text-accent hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Navbar;
