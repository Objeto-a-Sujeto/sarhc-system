"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Download, Eye, EyeOff } from "lucide-react";

export default function SARHCApp() {
  const [theme, setTheme] = useState("light");
  const [formData, setFormData] = useState({
    inventoryID: "",
    anatomy: "",
    origin: "",
    riskLevel: "low",
    claimActive: false,
    notes: "",
    isVisuallyRestricted: false
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  const anatomyOptions = [
    { value: "FMA:7295", label: "Cráneo" },
    { value: "FMA:9610", label: "Fémur" },
    { value: "FMA:23878", label: "Mandíbula" },
    { value: "FMA:24475", label: "Costilla" },
    { value: "FMA:50186", label: "Vértebra cervical" }
  ];

  const originContexts = [
    { value: "ARCHAEOLOGICAL", label: "Contexto Arqueológico", risk: "low" },
    { value: "DONATION", label: "Donación", risk: "low" },
    { value: "MEDICAL", label: "Colección Médica Histórica", risk: "medium" },
    { value: "UNKNOWN", label: "Origen Desconocido", risk: "high" },
    { value: "INDIGENOUS", label: "Contexto Indígena", risk: "high" },
    { value: "COLONIAL", label: "Contexto Colonial", risk: "high" }
  ];

  const applyEthicalInference = (origin: string, claimActive: boolean) => {
    const context = originContexts.find(ctx => ctx.value === origin);
    if (!context) return false;
    
    if (context.risk === "high" && claimActive) {
      return true;
    }
    return false;
  };

  const handleOriginChange = (value: string) => {
    const newRestricted = applyEthicalInference(value, formData.claimActive);
    setFormData(prev => ({
      ...prev,
      origin: value,
      riskLevel: originContexts.find(ctx => ctx.value === value)?.risk || "low",
      isVisuallyRestricted: newRestricted
    }));
  };

  const handleClaimChange = (checked: boolean) => {
    const newRestricted = applyEthicalInference(formData.origin, checked);
    setFormData(prev => ({
      ...prev,
      claimActive: checked,
      isVisuallyRestricted: newRestricted
    }));
  };

  const exportJSONLD = () => {
    const jsonld = {
      "@context": "https://raw.githubusercontent.com/biohumanities/bchr/main/bchr.ttl",
      "@type": "HumanRemains",
      "inventoryID": formData.inventoryID,
      "hasAnatomy": formData.anatomy,
      "hasOrigin": formData.origin,
      "isVisuallyRestricted": formData.isVisuallyRestricted,
      "claimStatus": formData.claimActive ? "active" : "inactive",
      "notes": formData.notes
    };

    const blob = new Blob([JSON.stringify(jsonld, null, 2)], { type: "application/ld+json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sarhc-${formData.inventoryID || "catalog"}.jsonld`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} p-4`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">S.A.R.H.C.</h1>
            <p className="text-gray-600 dark:text-gray-400">Sistema de Adaptación de Restos Humanos en Colección</p>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} transition-colors`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>

        <div className="grid gap-6">
          <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className="text-xl font-semibold mb-4">Información del Espécimen</h2>
            
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">ID de Inventario</label>
                <input
                  type="text"
                  value={formData.inventoryID}
                  onChange={(e) => setFormData(prev => ({ ...prev, inventoryID: e.target.value }))}
                  className={`w-full p-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  placeholder="Ej: HRC-2024-001"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Anatomía</label>
                <select
                  value={formData.anatomy}
                  onChange={(e) => setFormData(prev => ({ ...prev, anatomy: e.target.value }))}
                  className={`w-full p-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                >
                  <option value="">Selecciona...</option>
                  {anatomyOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Contexto de Origen</label>
                <select
                  value={formData.origin}
                  onChange={(e) => handleOriginChange(e.target.value)}
                  className={`w-full p-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                >
                  <option value="">Selecciona...</option>
                  {originContexts.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="claimActive"
                  checked={formData.claimActive}
                  onChange={(e) => handleClaimChange(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="claimActive" className="text-sm font-medium">
                  Reclamo activo por comunidad de origen
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Notas</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                  className={`w-full p-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'}`}
                  rows={3}
                  placeholder="Notas adicionales..."
                />
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border`}>
            <h2 className="text-xl font-semibold mb-4">Estado Ético</h2>
            
            <div className="grid gap-4">
              <div className={`flex justify-between items-center p-3 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <span>Nivel de Riesgo:</span>
                <span className={`px-2 py-1 rounded text-sm ${
                  formData.riskLevel === "high" ? "bg-red-100 text-red-800" :
                  formData.riskLevel === "medium" ? "bg-yellow-100 text-yellow-800" :
                  "bg-green-100 text-green-800"
                }`}>
                  {formData.riskLevel === "high" ? "Alto" :
                   formData.riskLevel === "medium" ? "Medio" : "Bajo"}
                </span>
              </div>

              <div className={`flex justify-between items-center p-3 rounded ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <span>Restricción Visual:</span>
                <span className={`px-2 py-1 rounded text-sm flex items-center gap-2 ${
                  formData.isVisuallyRestricted ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
                }`}>
                  {formData.isVisuallyRestricted ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  {formData.isVisuallyRestricted ? "Restringido" : "Público"}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={exportJSONLD}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Download className="h-4 w-4" />
            Exportar JSON-LD
          </button>
        </div>
      </div>
    </div>
  );
}
