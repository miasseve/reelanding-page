"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Wraps a button/child so it navigates to the correct destination.
 * - "contact"      → dispatches a global event to open the contact slider
 * - "#section"     → smooth scrolls on home page, otherwise navigates to /#section
 * - "/page"        → Next.js Link
 * - "http..."      → external link (new tab)
 * - null/undefined → renders children as-is (no link)
 */
export default function ButtonLink({ href, className = "", children }) {
  const pathname = usePathname();

  // No destination — render children without any wrapper
  if (!href || href.trim() === "") {
    return <>{children}</>;
  }

  // Open contact form
  if (href === "contact") {
    return (
      <span
        className={`cursor-pointer ${className}`}
        onClick={() => window.dispatchEvent(new CustomEvent("open-contact"))}
      >
        {children}
      </span>
    );
  }

  // External URL
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  // Anchor on current page — smooth scroll
  const hasHash = href.includes("#");
  const hash = hasHash ? href.split("#")[1] : null;

  if (hasHash) {
    const handleClick = (e) => {
      // If already on the target page (or it's home → /#section), scroll smoothly
      const targetPage = href.split("#")[0] || "/";
      if (pathname === targetPage || (targetPage === "/" && pathname === "/")) {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  // Internal page link
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
