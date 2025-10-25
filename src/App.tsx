
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartupKit from "./pages/kits/StartupKit";
import ProjectLeaderKit from "./pages/kits/ProjectLeaderKit";
import HRManagerKit from "./pages/kits/HRManagerKit";
import AllInOne from "./pages/kits/AllInOne";
import SalesMarketingKit from "./pages/SalesMarketingKit";
import ProductivityKit from "./pages/ProductivityKit";
import ProductivityBook from "./pages/ProductivityBook";
import SalesBook from "./pages/SalesBook";
import CareerBook from "./pages/CareerBook";
import EntrepreneurshipBook from "./pages/books/EntrepreneurshipBook";
import LeadershipBook from "./pages/books/LeadershipBook";
import MarketingBook from "./pages/MarketingBook";
import SelfDevelopmentBook from "./pages/SelfDevelopmentBook";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Kit Pages */}
          <Route path="/startup-kit" element={<StartupKit />} />
          <Route path="/project-leader-kit" element={<ProjectLeaderKit />} />
          <Route path="/hr-manager-kit" element={<HRManagerKit />} />
          <Route path="/all-in-one" element={<AllInOne />} />
          <Route path="/sales-marketing-kit" element={<SalesMarketingKit />} />
          <Route path="/productivity-kit" element={<ProductivityKit />} />
          
          {/* Book Pages */}
          <Route path="/productivity-book" element={<ProductivityBook />} />
          <Route path="/sales-book" element={<SalesBook />} />
          <Route path="/career-book" element={<CareerBook />} />
          <Route path="/leadership-book" element={<LeadershipBook />} />
          <Route path="/marketing-book" element={<MarketingBook />} />
          <Route path="/self-development-book" element={<SelfDevelopmentBook />} />
          <Route path="/entrepreneurship-book" element={<EntrepreneurshipBook />} />
          <Route path="/institutional-success-book" element={<LeadershipBook />} /> {/* Alias for backward compatibility */}
          
          {/* Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
