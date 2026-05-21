import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedirectLegacy from "./pages/RedirectLegacy";

const NEW = "https://readtolead.online";
const UTM = "utm_source=old_landing&utm_medium=redirect";

const target = (path: string) =>
  `${NEW}${path}${path.includes("?") ? "&" : "?"}${UTM}`;

// Old landing path -> new site target
const legacyRoutes: { from: string; to: string }[] = [
  { from: "/", to: target("/") },
  { from: "/growth-marketing", to: target("/growth") },
  { from: "/startup-kit", to: target("/startupkit") },
  { from: "/startupkitpro", to: target("/startupkit") },
  { from: "/all-in-one", to: target("/allaccess") },
  { from: "/duckverse", to: target("/duckverse") },
  { from: "/sales-marketing-kit", to: target("/marketing") },
  { from: "/sales-marketing-bundle", to: target("/marketing") },
  { from: "/productivity-kit", to: target("/productivitykit") },
  { from: "/project-leader-kit", to: target("/") },
  { from: "/hr-manager-kit", to: target("/") },
  { from: "/gift-card", to: target("/") },
  { from: "/vision", to: target("/") },
  { from: "/productivity-book", to: target("/productivitykit") },
  { from: "/sales-book", to: target("/marketing") },
  { from: "/marketing-book", to: target("/marketing") },
  { from: "/entrepreneurship-book", to: target("/startupkit") },
  { from: "/career-book", to: target("/") },
  { from: "/leadership-book", to: target("/") },
  { from: "/self-development-book", to: target("/") },
  { from: "/institutional-success-book", to: target("/") },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {legacyRoutes.map(({ from, to }) => (
          <Route key={from} path={from} element={<RedirectLegacy to={to} />} />
        ))}
        {/* Any unmapped legacy URL -> new home */}
        <Route path="*" element={<RedirectLegacy to={target("/")} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
