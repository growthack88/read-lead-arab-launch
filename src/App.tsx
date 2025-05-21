
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StartupKit from "./pages/StartupKit";
import SalesMarketingKit from "./pages/SalesMarketingKit";
import ProductivityKit from "./pages/ProductivityKit";
import ProductivityBook from "./pages/ProductivityBook";
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
          <Route path="/startup-kit" element={<StartupKit />} />
          <Route path="/sales-marketing-kit" element={<SalesMarketingKit />} />
          <Route path="/productivity-kit" element={<ProductivityKit />} />
          <Route path="/productivity-book" element={<ProductivityBook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
