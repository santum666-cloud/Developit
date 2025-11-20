import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Privacy from "@/pages/privacy";
import Registro from "@/pages/registro";
import Login from "@/pages/login";
import Cursos from "@/pages/cursos";
import Blog from "@/pages/blog";
import Post from "@/pages/post";
import Nosotros from "@/pages/nosotros";
import Modulo from "@/pages/modulo";
import Carreras from "@/pages/carreras";
import NotFound from "@/pages/not-found";

// Base path para deployment en subcarpeta /test/
const basePath = import.meta.env.PROD ? "/test" : "";

function AppRouter() {
  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/privacy" component={Privacy}/>
        <Route path="/registro" component={Registro}/>
        <Route path="/login" component={Login}/>
        <Route path="/cursos" component={Cursos}/>
        <Route path="/blog" component={Blog}/>
        <Route path="/post" component={Post}/>
        <Route path="/nosotros" component={Nosotros}/>
        <Route path="/modulo" component={Modulo}/>
        <Route path="/carreras" component={Carreras}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
