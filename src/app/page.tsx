"use client";

import { useState, useEffect } from "react";
import { 
  Moon, Sun, Download, Eye, EyeOff, Save, FileText, Database, 
  Settings, AlertTriangle, CheckCircle, Info, Archive, Search,
  Filter, Plus, Edit, Trash2, Upload, RefreshCw, Globe, Shield,
  Users, Clock, MapPin, Tag, Calendar, BarChart3, Activity,
  ChevronDown, ChevronRight, X, Menu, Home, BookOpen, HelpCircle
} from "lucide-react";

export default function SARHCApp() {
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("catalog");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  
  const [formData, setFormData] = useState({
    inventoryID: "",
    anatomy: "",
    origin: "",
    riskLevel: "low",
    claimActive: false,
    notes: "",
    isVisuallyRestricted: false,
    collectionDate: "",
    provenance: "",
    condition: "good",
    researcher: "",
    permissions: [],
    documentation: [],
    ethicalReview: false,
    communityConsultation: false,
    dataSensitivity: "public",
    accessLevel: "general",
    restrictions: [],
    culturalSignificance: "",
    repatriationStatus: "none",
    scientificValue: "medium",
    preservationPriority: "normal"
  });

  const [catalogItems, setCatalogItems] = useState([
    {
      id: "HRC-2024-001",
      anatomy: "FMA:7295",
      anatomyLabel: "Cráneo",
      origin: "ARCHAEOLOGICAL",
      originLabel: "Contexto Arqueológico",
      riskLevel: "low",
      claimActive: false,
      restricted: false,
      date: "2024-01-15",
      researcher: "Dr. María González"
    },
    {
      id: "HRC-2024-002",
      anatomy: "FMA:9610",
      anatomyLabel: "Fémur",
      origin: "INDIGENOUS",
      originLabel: "Contexto Indígena",
      riskLevel: "high",
      claimActive: true,
      restricted: true,
      date: "2024-02-20",
      researcher: "Dr. Juan Pérez"
    }
  ]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  const anatomyOptions = [
    { value: "FMA:7295", label: "Cráneo", category: "Cabeza" },
    { value: "FMA:9610", label: "Fémur", category: "Extremidades" },
    { value: "FMA:23878", label: "Mandíbula", category: "Cabeza" },
    { value: "FMA:24475", label: "Costilla", category: "Torax" },
    { value: "FMA:50186", label: "Vértebra cervical", category: "Columna" },
    { value: "FMA:7189", label: "Húmero", category: "Extremidades" },
    { value: "FMA:24933", label: "Pelvis", category: "Pelvis" },
    { value: "FMA:9660", label: "Tibia", category: "Extremidades" },
    { value: "FMA:61792", label: "Radio", category: "Extremidades" },
    { value: "FMA:7201", label: "Clavícula", category: "Torax" }
  ];

  const originContexts = [
    { value: "ARCHAEOLOGICAL", label: "Contexto Arqueológico", risk: "low", description: "Restos de excavaciones arqueológicas documentadas" },
    { value: "DONATION", label: "Donación", risk: "low", description: "Donaciones voluntarias documentadas" },
    { value: "MEDICAL", label: "Colección Médica Histórica", risk: "medium", description: "Especímenes de colecciones médicas antiguas" },
    { value: "UNKNOWN", label: "Origen Desconocido", risk: "high", description: "Procedencia no documentada" },
    { value: "INDIGENOUS", label: "Contexto Indígena", risk: "high", description: "Restos de comunidades indígenas" },
    { value: "COLONIAL", label: "Contexto Colonial", risk: "high", description: "Restos de período colonial" }
  ];

  const applyEthicalInference = (origin: string, claimActive: boolean, culturalSignificance: string) => {
    const context = originContexts.find(ctx => ctx.value === origin);
    if (!context) return false;
    
    let restricted = false;
    
    if (context.risk === "high" && claimActive) {
      restricted = true;
    }
    
    if (culturalSignificance && culturalSignificance.length > 50) {
      restricted = true;
    }
    
    if (origin === "INDIGENOUS" || origin === "COLONIAL") {
      restricted = true;
    }
    
    return restricted;
  };

  const handleOriginChange = (value: string) => {
    const newRestricted = applyEthicalInference(value, formData.claimActive, formData.culturalSignificance);
    setFormData(prev => ({
      ...prev,
      origin: value,
      riskLevel: originContexts.find(ctx => ctx.value === value)?.risk || "low",
      isVisuallyRestricted: newRestricted
    }));
  };

  const handleClaimChange = (checked: boolean) => {
    const newRestricted = applyEthicalInference(formData.origin, checked, formData.culturalSignificance);
    setFormData(prev => ({
      ...prev,
      claimActive: checked,
      isVisuallyRestricted: newRestricted
    }));
  };

  const handleCulturalSignificanceChange = (value: string) => {
    const newRestricted = applyEthicalInference(formData.origin, formData.claimActive, value);
    setFormData(prev => ({
      ...prev,
      culturalSignificance: value,
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
      "notes": formData.notes,
      "collectionDate": formData.collectionDate,
      "provenance": formData.provenance,
      "condition": formData.condition,
      "researcher": formData.researcher,
      "ethicalReview": formData.ethicalReview,
      "communityConsultation": formData.communityConsultation,
      "culturalSignificance": formData.culturalSignificance,
      "repatriationStatus": formData.repatriationStatus,
      "scientificValue": formData.scientificValue,
      "preservationPriority": formData.preservationPriority
    };

    const blob = new Blob([JSON.stringify(jsonld, null, 2)], { type: "application/ld+json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sarhc-${formData.inventoryID || "catalog"}.jsonld`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const saveToCatalog = () => {
    if (!formData.inventoryID) {
      alert("Por favor ingrese un ID de inventario");
      return;
    }

    const newItem = {
      id: formData.inventoryID,
      anatomy: formData.anatomy,
      anatomyLabel: anatomyOptions.find(a => a.value === formData.anatomy)?.label || "",
      origin: formData.origin,
      originLabel: originContexts.find(o => o.value === formData.origin)?.label || "",
      riskLevel: formData.riskLevel,
      claimActive: formData.claimActive,
      restricted: formData.isVisuallyRestricted,
      date: new Date().toISOString().split('T')[0],
      researcher: formData.researcher
    };

    setCatalogItems(prev => [...prev, newItem]);
    
    // Reset form
    setFormData({
      inventoryID: "",
      anatomy: "",
      origin: "",
      riskLevel: "low",
      claimActive: false,
      notes: "",
      isVisuallyRestricted: false,
      collectionDate: "",
      provenance: "",
      condition: "good",
      researcher: "",
      permissions: [],
      documentation: [],
      ethicalReview: false,
      communityConsultation: false,
      dataSensitivity: "public",
      accessLevel: "general",
      restrictions: [],
      culturalSignificance: "",
      repatriationStatus: "none",
      scientificValue: "medium",
      preservationPriority: "normal"
    });

    alert("Espécimen guardado en el catálogo");
  };

  const filteredItems = catalogItems.filter(item => {
    const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.anatomyLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.originLabel.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || 
                         (filterStatus === "restricted" && item.restricted) ||
                         (filterStatus === "unrestricted" && !item.restricted);
    
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: catalogItems.length,
    restricted: catalogItems.filter(item => item.restricted).length,
    highRisk: catalogItems.filter(item => item.riskLevel === "high").length,
    withClaims: catalogItems.filter(item => item.claimActive).length
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md hover:bg-accent"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="ml-4 flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Archive className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">S.A.R.H.C.</span>
            </div>
            <span className="text-sm text-muted-foreground">
              Sistema de Adaptación de Restos Humanos en Colección
            </span>
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar especímenes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 rounded-md border bg-background"
              />
            </div>
            
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-md hover:bg-accent"
            >
              <AlertTriangle className="h-5 w-5" />
              {stats.restricted > 0 && (
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full" />
              )}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-accent"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-0'} border-r bg-card transition-all duration-300 overflow-hidden`}>
          <nav className="p-4 space-y-2">
            {[
              { id: "catalog", label: "Catálogo", icon: Database },
              { id: "add", label: "Agregar Espécimen", icon: Plus },
              { id: "analytics", label: "Análisis", icon: BarChart3 },
              { id: "settings", label: "Configuración", icon: Settings },
              { id: "help", label: "Ayuda", icon: HelpCircle }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  activeTab === item.id ? "bg-accent text-accent-foreground" : "hover:bg-accent"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Stats Panel */}
          <div className="p-4 border-t">
            <h3 className="font-semibold mb-3">Estadísticas</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Total especímenes:</span>
                <span className="font-medium">{stats.total}</span>
              </div>
              <div className="flex justify-between">
                <span>Restringidos:</span>
                <span className="font-medium text-destructive">{stats.restricted}</span>
              </div>
              <div className="flex justify-between">
                <span>Alto riesgo:</span>
                <span className="font-medium text-orange-600">{stats.highRisk}</span>
              </div>
              <div className="flex justify-between">
                <span>Con reclamos:</span>
                <span className="font-medium text-yellow-600">{stats.withClaims}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "catalog" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Catálogo de Especímenes</h2>
                <div className="flex space-x-2">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 rounded-md border bg-background"
                  >
                    <option value="all">Todos</option>
                    <option value="restricted">Restringidos</option>
                    <option value="unrestricted">No restringidos</option>
                  </select>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                    <RefreshCw className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid gap-4">
                {filteredItems.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg bg-card">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">{item.id}</h3>
                        <p className="text-muted-foreground">{item.anatomyLabel} • {item.originLabel}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm">
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{item.date}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{item.researcher}</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.riskLevel === "high" ? "bg-red-100 text-red-800" :
                          item.riskLevel === "medium" ? "bg-yellow-100 text-yellow-800" :
                          "bg-green-100 text-green-800"
                        }`}>
                          {item.riskLevel === "high" ? "Alto" : item.riskLevel === "medium" ? "Medio" : "Bajo"}
                        </span>
                        {item.restricted && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs flex items-center space-x-1">
                            <EyeOff className="h-3 w-3" />
                            <span>Restringido</span>
                          </span>
                        )}
                        {item.claimActive && (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">
                            Reclamo activo
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "add" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Agregar Nuevo Espécimen</h2>
              
              <div className="space-y-6">
                {/* Basic Information */}
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Información Básica
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">ID de Inventario *</label>
                      <input
                        type="text"
                        value={formData.inventoryID}
                        onChange={(e) => setFormData(prev => ({ ...prev, inventoryID: e.target.value }))}
                        className="w-full p-2 border rounded-md bg-background"
                        placeholder="Ej: HRC-2024-001"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Anatomía *</label>
                      <select
                        value={formData.anatomy}
                        onChange={(e) => setFormData(prev => ({ ...prev, anatomy: e.target.value }))}
                        className="w-full p-2 border rounded-md bg-background"
                      >
                        <option value="">Selecciona...</option>
                        {anatomyOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label} ({option.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Contexto de Origen *</label>
                      <select
                        value={formData.origin}
                        onChange={(e) => handleOriginChange(e.target.value)}
                        className="w-full p-2 border rounded-md bg-background"
                      >
                        <option value="">Selecciona...</option>
                        {originContexts.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {formData.origin && (
                        <p className="text-xs text-muted-foreground mt-1">
                          {originContexts.find(o => o.value === formData.origin)?.description}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Investigador Responsable</label>
                      <input
                        type="text"
                        value={formData.researcher}
                        onChange={(e) => setFormData(prev => ({ ...prev, researcher: e.target.value }))}
                        className="w-full p-2 border rounded-md bg-background"
                        placeholder="Nombre del investigador"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Fecha de Colección</label>
                      <input
                        type="date"
                        value={formData.collectionDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, collectionDate: e.target.value }))}
                        className="w-full p-2 border rounded-md bg-background"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Procedencia</label>
                      <input
                        type="text"
                        value={formData.provenance}
                        onChange={(e) => setFormData(prev => ({ ...prev, provenance: e.target.value }))}
                        className="w-full p-2 border rounded-md bg-background"
                        placeholder="Ubicación geográfica o institución"
                      />
                    </div>
                  </div>
                </div>

                {/* Ethical Assessment */}
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Evaluación Ética
                  </h3>
                  
                  <div className="space-y-4">
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

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="ethicalReview"
                        checked={formData.ethicalReview}
                        onChange={(e) => setFormData(prev => ({ ...prev, ethicalReview: e.target.checked }))}
                        className="rounded"
                      />
                      <label htmlFor="ethicalReview" className="text-sm font-medium">
                        Revisión éttica completada
                      </label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="communityConsultation"
                        checked={formData.communityConsultation}
                        onChange={(e) => setFormData(prev => ({ ...prev, communityConsultation: e.target.checked }))}
                        className="rounded"
                      />
                      <label htmlFor="communityConsultation" className="text-sm font-medium">
                        Consulta comunitaria realizada
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Significado Cultural</label>
                      <textarea
                        value={formData.culturalSignificance}
                        onChange={(e) => handleCulturalSignificanceChange(e.target.value)}
                        className="w-full p-2 border rounded-md bg-background"
                        rows={3}
                        placeholder="Descripción del significado cultural o importancia para comunidades..."
                      />
                    </div>
                  </div>
                </div>

                {/* Advanced Options */}
                <div className="p-6 border rounded-lg bg-card">
                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-lg font-semibold flex items-center">
                      <Settings className="h-5 w-5 mr-2" />
                      Opciones Avanzadas
                    </h3>
                    {showAdvanced ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </button>
                  
                  {showAdvanced && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Estado de Conservación</label>
                        <select
                          value={formData.condition}
                          onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
                          className="w-full p-2 border rounded-md bg-background"
                        >
                          <option value="excellent">Excelente</option>
                          <option value="good">Bueno</option>
                          <option value="fair">Regular</option>
                          <option value="poor">Pobre</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Valor Científico</label>
                        <select
                          value={formData.scientificValue}
                          onChange={(e) => setFormData(prev => ({ ...prev, scientificValue: e.target.value }))}
                          className="w-full p-2 border rounded-md bg-background"
                        >
                          <option value="low">Bajo</option>
                          <option value="medium">Medio</option>
                          <option value="high">Alto</option>
                          <option value="critical">Crítico</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Prioridad de Preservación</label>
                        <select
                          value={formData.preservationPriority}
                          onChange={(e) => setFormData(prev => ({ ...prev, preservationPriority: e.target.value }))}
                          className="w-full p-2 border rounded-md bg-background"
                        >
                          <option value="low">Baja</option>
                          <option value="normal">Normal</option>
                          <option value="high">Alta</option>
                          <option value="urgent">Urgente</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Estado de Repatriación</label>
                        <select
                          value={formData.repatriationStatus}
                          onChange={(e) => setFormData(prev => ({ ...prev, repatriationStatus: e.target.value }))}
                          className="w-full p-2 border rounded-md bg-background"
                        >
                          <option value="none">No aplica</option>
                          <option value="pending">Pendiente</option>
                          <option value="requested">Solicitado</option>
                          <option value="approved">Aprobado</option>
                          <option value="completed">Completado</option>
                        </select>
                      </div>
                    </div>
                  )}
                </div>

                {/* Notes */}
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-4">Notas Adicionales</h3>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    className="w-full p-2 border rounded-md bg-background"
                    rows={4}
                    placeholder="Notas adicionales sobre el espécimen..."
                  />
                </div>

                {/* Ethical Status */}
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-4">Estado Ético Actual</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex justify-between items-center p-3 bg-muted rounded">
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

                    <div className="flex justify-between items-center p-3 bg-muted rounded">
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

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={exportJSONLD}
                    className="flex items-center gap-2 px-4 py-2 border border-input bg-background hover:bg-accent rounded-md"
                  >
                    <Download className="h-4 w-4" />
                    Exportar JSON-LD
                  </button>
                  <button
                    onClick={saveToCatalog}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                  >
                    <Save className="h-4 w-4" />
                    Guardar en Catálogo
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Análisis y Estadísticas</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Especímenes</p>
                      <p className="text-2xl font-bold">{stats.total}</p>
                    </div>
                    <Database className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Restringidos</p>
                      <p className="text-2xl font-bold text-destructive">{stats.restricted}</p>
                    </div>
                    <EyeOff className="h-8 w-8 text-destructive" />
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Alto Riesgo</p>
                      <p className="text-2xl font-bold text-orange-600">{stats.highRisk}</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-orange-600" />
                  </div>
                </div>

                <div className="p-4 border rounded-lg bg-card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Con Reclamos</p>
                      <p className="text-2xl font-bold text-yellow-600">{stats.withClaims}</p>
                    </div>
                    <Users className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
              </div>

              <div className="p-6 border rounded-lg bg-card">
                <h3 className="text-lg font-semibold mb-4">Distribución por Contexto de Origen</h3>
                <div className="space-y-2">
                  {originContexts.map(context => {
                    const count = catalogItems.filter(item => item.origin === context.value).length;
                    const percentage = stats.total > 0 ? (count / stats.total) * 100 : 0;
                    
                    return (
                      <div key={context.value} className="flex items-center justify-between">
                        <span>{context.label}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground w-12">{count}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Configuración del Sistema</h2>
              
              <div className="space-y-6">
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-4">Configuración General</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Modo Oscuro</p>
                        <p className="text-sm text-muted-foreground">Cambiar entre tema claro y oscuro</p>
                      </div>
                      <button
                        onClick={toggleTheme}
                        className="p-2 rounded-md border hover:bg-accent"
                      >
                        {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-4">Información del Sistema</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Versión:</span>
                      <span>1.0.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ontología:</span>
                      <span>BCHR (Biohumanities)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Formato de Exportación:</span>
                      <span>JSON-LD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "help" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Ayuda y Documentación</h2>
              
              <div className="space-y-6">
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-4">Guía Rápida</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium">1. Agregar Espécimen</h4>
                      <p className="text-muted-foreground">Ve a la sección "Agregar Espécimen" y completa toda la información requerida.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">2. Evaluación Ética Automática</h4>
                      <p className="text-muted-foreground">El sistema aplica automáticamente restricciones basadas en el nivel de riesgo y reclamos activos.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">3. Exportar Datos</h4>
                      <p className="text-muted-foreground">Exporta en formato JSON-LD compatible con WebProtégé y otras plataformas semánticas.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="text-lg font-semibold mb-4">Niveles de Riesgo</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <span><strong>Bajo:</strong> Contexto arqueológico o donación documentada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <span><strong>Medio:</strong> Colecciones médicas históricas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <span><strong>Alto:</strong> Origen indígena, colonial o desconocido</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
