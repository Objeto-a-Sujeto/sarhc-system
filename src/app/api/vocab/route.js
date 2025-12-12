export async function GET() {
  const vocabData = {
    system: {
      name: "S.A.R.H.C.",
      version: "1.0.0",
      description: "Sistema de Adaptación de Restos Humanos en Colección"
    },
    anatomyTerms: [
      { uri: "FMA:7295", label: "Cráneo" },
      { uri: "FMA:9610", label: "Fémur" },
      { uri: "FMA:23878", label: "Mandíbula" },
      { uri: "FMA:24475", label: "Costilla" },
      { uri: "FMA:50186", label: "Vértebra cervical" }
    ],
    originContexts: [
      { uri: "ARCHAEOLOGICAL", label: "Contexto Arqueológico", risk: "low" },
      { uri: "DONATION", label: "Donación", risk: "low" },
      { uri: "MEDICAL", label: "Colección Médica Histórica", risk: "medium" },
      { uri: "UNKNOWN", label: "Origen Desconocido", risk: "high" },
      { uri: "INDIGENOUS", label: "Contexto Indígena", risk: "high" },
      { uri: "COLONIAL", label: "Contexto Colonial", risk: "high" }
    ]
  };

  return Response.json(vocabData);
}
