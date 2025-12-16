import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Technology from "./pages/Technology";
import Roadmap from "./pages/Roadmap";
import Terminal from "./pages/Terminal";
import TAQuant from "./pages/TAQuant";
import TASyndicate from "./pages/TASyndicate";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Developers from "./pages/Developers";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/quant" element={<TAQuant />} />
          <Route path="/syndicate" element={<TASyndicate />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
