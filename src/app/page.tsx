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
      researcher: "Dr. María González",
      condition: "good",
      culturalSignificance: "Resto de excavación prehispánica",
      provenance: "Sitio arqueológico El Mirador, Guatemala"
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
      researcher: "Dr. Juan Pérez",
      condition: "fair",
      culturalSignificance: "Restro ancestral de la comunidad Maya K'iche'",
      provenance: "Altiplano guatemalteco"
    },
    {
      id: "HRC-2024-003",
      anatomy: "FMA:23878",
      anatomyLabel: "Mandíbula",
      origin: "MEDICAL",
      originLabel: "Colección Médica Histórica",
      riskLevel: "medium",
      claimActive: false,
      restricted: false,
      date: "2024-03-10",
      researcher: "Dra. Ana Martínez",
      condition: "excellent",
      culturalSignificance: "Especímenes de colección médica del siglo XIX",
      provenance: "Facultad de Medicina, Universidad Nacional"
    },
    {
      id: "HRC-2024-004",
      anatomy: "FMA:24475",
      anatomyLabel: "Costilla",
      origin: "COLONIAL",
      originLabel: "Contexto Colonial",
      riskLevel: "high",
      claimActive: true,
      restricted: true,
      date: "2024-01-25",
      researcher: "Dr. Carlos Rodríguez",
      condition: "poor",
      culturalSignificance: "Restro del período colonial español",
      provenance: "Iglesia de Santo Domingo, Antigua Guatemala"
    },
    {
      id: "HRC-2024-005",
      anatomy: "FMA:50186",
      anatomyLabel: "Vértebra cervical",
      origin: "DONATION",
      originLabel: "Donación",
      riskLevel: "low",
      claimActive: false,
      restricted: false,
      date: "2024-02-15",
      researcher: "Dra. Laura Sánchez",
      condition: "good",
      culturalSignificance: "Donación voluntaria para investigación",
      provenance: "Programa de donación científica"
    },
    {
      id: "HRC-2024-006",
      anatomy: "F
