import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Cakes from "./pages/Cakes";
import Chocolates from "./pages/Chocolates";
import Cupcakes from "./pages/Cupcakes";
import Cakesicles from "./pages/Cakesicles";
import Mousse from "./pages/Mousse";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/chocolates" element={<Chocolates />} />
            <Route path="/cupcakes" element={<Cupcakes />} />
            <Route path="/cakesicles" element={<Cakesicles />} />
            <Route path="/mousse" element={<Mousse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
