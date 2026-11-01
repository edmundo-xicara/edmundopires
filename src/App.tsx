import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Cases from "./pages/Cases";
import CaseGreciaAntiga from "./pages/CaseGreciaAntiga";
import CaseCopaDoMundo from "./pages/CaseCopaDoMundo";
import CaseShogun from "./pages/CaseShogun";
import CaseRevistaInstagram from "./pages/CaseRevistaInstagram";
import CaseNobel from "./pages/CaseNobel";
import Lab from "./pages/Lab";
import Portfolio from "./pages/Midia";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/grecia-antiga" element={<CaseGreciaAntiga />} />
          <Route path="/cases/olimpiadas-2024" element={<CaseCopaDoMundo />} />
          <Route path="/cases/shogun-disney" element={<CaseShogun />} />
          <Route path="/cases/revista-instagram" element={<CaseRevistaInstagram />} />
          <Route path="/cases/nobel-2025" element={<CaseNobel />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/servicos" element={<Navigate to="/" replace />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
