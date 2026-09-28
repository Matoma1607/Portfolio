import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API route for AI Project Brief Generator powered by Gemini
app.post("/api/ai-brief", async (req, res) => {
  try {
    const { userIdea, businessType, targetAudience } = req.body;

    if (!userIdea || typeof userIdea !== "string") {
      return res.status(400).json({ error: "Por favor proporciona una descripción de tu idea de proyecto." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: "API Key no configurada. Configure GEMINI_API_KEY en las variables de entorno."
      });
    }

    const ai = new GoogleGenAI({ apiKey });

    const prompt = `
Eres un Consultor Senior de Estrategia Digital y Arquitectura Web de "Studio Web".
Un potencial cliente ha ingresado la siguiente idea para su sitio web:
- Idea / Descripción: ${userIdea}
- Tipo de Negocio: ${businessType || "No especificado"}
- Público Objetivo: ${targetAudience || "General"}

Por favor genera una propuesta ejecutiva clara, profesional, entusiasmante y estructurada en formato JSON puro (sin bloques de markdown ni texto adicional).
Debe responder con este formato JSON estricto:
{
  "projectTitle": "Nombre conceptual sugerido para la solución web",
  "recommendedService": "Nombre del servicio recomendado de Studio Web (ej: Desarrollo Web Institucional, Tienda E-Commerce, Plataforma de Servicios, Sistema de Gestión)",
  "executiveSummary": "Un resumen de 2-3 oraciones motivadoras sobre el potencial del proyecto",
  "keyFeatures": [
    "Característica clave 1",
    "Característica clave 2",
    "Característica clave 3",
    "Característica clave 4"
  ],
  "suggestedStack": ["React", "Tailwind CSS", "WhatsApp Business Integration"],
  "estimatedTimeline": "Tiempo estimado sugerido",
  "recommendedBudgetRange": "Consulte presupuesto personalizado por WhatsApp",
  "whatsappDraft": "Mensaje prediseñado entusiasta para enviar directo a WhatsApp al +5493815755909 solicitando iniciar el proyecto"
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    const responseText = response.text || "{}";
    const briefData = JSON.parse(responseText);

    return res.json({ success: true, brief: briefData });
  } catch (error: any) {
    console.error("Error al generar propuesta AI:", error);
    return res.status(500).json({
      error: "Ocurrió un error al procesar tu propuesta. Por favor intenta nuevamente o contáctanos por WhatsApp."
    });
  }
});

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Core Digital Server running on http://localhost:${PORT}`);
  });
}

startServer();
