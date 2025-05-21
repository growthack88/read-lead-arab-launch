
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartupKit from "./pages/StartupKit";
import SalesMarketingKit from "./pages/SalesMarketingKit";
import ProductivityKit from "./pages/ProductivityKit";
import ProductivityBook from "./pages/ProductivityBook";
import SalesBook from "./pages/SalesBook";
import CareerBook from "./pages/CareerBook";
import InstitutionalSuccessBook from "./pages/InstitutionalSuccessBook";
import MarketingBook from "./pages/MarketingBook";
import SelfDevelopmentBook from "./pages/SelfDevelopmentBook";
import NotFound from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Kit Pages */}
          <Route path="/startup-kit" element={<StartupKit />} />
          <Route path="/sales-marketing-kit" element={<SalesMarketingKit />} />
          <Route path="/productivity-kit" element={<ProductivityKit />} />
          
          {/* Book Pages */}
          <Route path="/productivity-book" element={<ProductivityBook />} />
          <Route path="/sales-book" element={<SalesBook />} />
          <Route path="/career-book" element={<CareerBook />} />
          <Route path="/institutional-success-book" element={<InstitutionalSuccessBook />} />
          <Route path="/marketing-book" element={<MarketingBook />} />
          <Route path="/self-development-book" element={<SelfDevelopmentBook />} />
          
          {/* Catch All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
