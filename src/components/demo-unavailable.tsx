// src/pages/DemoUnavailable.jsx
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function DemoUnavailable() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-light mb-4">Live Demo Unavailable</h1>

      <p className="max-w-lg text-muted-foreground mb-8">
        This project was developed as an MVP, private client work, or is no
        longer publicly hosted. Feel free to explore the project details or
        source code if available.
      </p>

      <Button onClick={() => navigate(-1)}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Go Back
      </Button>
    </main>
  );
}