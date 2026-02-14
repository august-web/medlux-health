import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-teal-glow/10 blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card max-w-lg w-full p-12 rounded-[3rem] border border-slate-100 shadow-2xl text-center relative z-10"
      >
        <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-10 shadow-lg shadow-primary/20">
          <Shield className="w-10 h-10 text-secondary" />
        </div>

        <h1 className="text-8xl font-serif font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6">Page Not Found</h2>
        
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          The page you are looking for might have been moved, deleted, or never existed.
        </p>

        <div className="flex flex-col gap-4">
          <Button asChild size="xl" className="rounded-full font-bold shadow-lg shadow-primary/10">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="rounded-full text-slate-500 font-semibold hover:text-primary transition-colors">
            <button onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
