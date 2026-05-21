import { useEffect } from "react";

interface RedirectLegacyProps {
  to: string;
}

/**
 * Legacy landing redirect.
 * The old site (land.readtolead.store) has migrated to readtolead.online.
 * Lovable's native hosting has no per-path server 301, so this performs an
 * immediate client-side redirect. If the old domain is ever fronted by
 * Cloudflare/Netlify, public/_redirects upgrades these to real HTTP 301s.
 */
const RedirectLegacy = ({ to }: RedirectLegacyProps) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div
      dir="rtl"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
        background: "#F2F5F4",
        color: "#169380",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "2rem",
          height: "2rem",
          borderRadius: "9999px",
          border: "3px solid #169380",
          borderTopColor: "transparent",
          animation: "rtlspin 0.8s linear infinite",
        }}
      />
      <p style={{ fontSize: "1.1rem", margin: 0 }}>يتم تحويلك إلى الموقع الجديد…</p>
      <a href={to} style={{ color: "#169380", fontSize: "0.9rem" }}>
        اضغط هنا لو لم يتم التحويل تلقائيًا
      </a>
      <style>{`@keyframes rtlspin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};

export default RedirectLegacy;
