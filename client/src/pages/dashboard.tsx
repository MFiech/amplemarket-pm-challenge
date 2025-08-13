import { useState } from "react";
import Sidebar from "@/components/sidebar";
import SequenceOverview from "@/components/sequence-overview";
import ContactFeed from "@/components/contact-feed";
import ContactsView from "@/components/contacts-view";
import AnalyticsView from "@/components/analytics-view";
import SearcherEmpty from "@/components/searcher-empty";
import Searcher from "@/components/searcher";
import SettingsView from "@/components/settings-view";
import SavedSearchesView from "@/components/saved-searches-view";
import DuoCopilotView from "@/components/duo-copilot-view";
import OverviewView from "@/components/overview-view";
import WireframePlaceholder from "@/components/wireframe-placeholder";

type ViewType = "overview" | "sequences" | "contacts" | "analytics" | "searcher" | "searcher-empty" | "saved-lists" | "lists" | "calls" | "tasks" | "workflows" | "duo-copilot" | "settings";

type Mode = "empty" | "prefilled-v1" | "prefilled-v2";

export default function Dashboard() {
  const [mode, setMode] = useState<Mode>("empty");
  const [activeView, setActiveView] = useState<ViewType>("searcher-empty");

  const renderMainContent = () => {
    switch (activeView) {
      case "overview":
        return <OverviewView mode={mode} />;
      case "sequences":
        return <WireframePlaceholder title="Sequences" />;
      case "contacts":
        return <WireframePlaceholder title="Contacts" />;
      case "analytics":
        return <WireframePlaceholder title="Analytics" />;
      case "searcher-empty":
        return <SearcherEmpty onSwitchToPrefilled={() => {
          setMode("prefilled-v1");
          setActiveView("searcher");
        }} />;
      case "searcher":
        return <Searcher mode={mode} />;
      case "saved-lists":
        return <SavedSearchesView 
          mode={mode} 
          onNavigateToSearcher={() => setActiveView("searcher-empty")}
        />;
      case "duo-copilot":
        return <DuoCopilotView mode={mode} />;
      case "settings":
        return <SettingsView />;
      default:
        return <WireframePlaceholder title={activeView.charAt(0).toUpperCase() + activeView.slice(1).replace('-', ' ')} />;
    }
  };

  const handleSetMode = (newMode: Mode) => {
    setMode(newMode);
    // Only auto-switch to searcher views if we're currently on the opposite searcher view
    if ((newMode === "empty" && activeView === "searcher") || 
        ((newMode === "prefilled-v1" || newMode === "prefilled-v2") && activeView === "searcher-empty")) {
      setActiveView(newMode === "empty" ? "searcher-empty" : "searcher");
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100">
      {/* Top Bar */}
      <div className="border-b border-gray-300 bg-white p-3 flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <span className="text-sm font-bold text-gray-900">Select prototype version:</span>
          <div className="inline-flex rounded-md border border-gray-300 overflow-hidden" role="tablist" aria-label="Prototype version toggle">
            <button
              role="tab"
              aria-selected={mode === "empty"}
              className={`${mode === "empty" ? "bg-gray-200 text-gray-900" : "bg-white text-gray-600 hover:bg-gray-50"} px-4 py-2 text-sm focus:outline-none`}
              onClick={() => handleSetMode("empty")}
            >
              Empty states
            </button>
            <button
              role="tab"
              aria-selected={mode === "prefilled-v1"}
              className={`${mode === "prefilled-v1" ? "bg-gray-200 text-gray-900" : "bg-white text-gray-600 hover:bg-gray-50"} px-4 py-2 text-sm border-l border-gray-300 focus:outline-none`}
              onClick={() => handleSetMode("prefilled-v1")}
            >
              Pre-filled V1
            </button>
            <button
              role="tab"
              aria-selected={mode === "prefilled-v2"}
              className={`${mode === "prefilled-v2" ? "bg-gray-200 text-gray-900" : "bg-white text-gray-600 hover:bg-gray-50"} px-4 py-2 text-sm border-l border-gray-300 focus:outline-none`}
              onClick={() => handleSetMode("prefilled-v2")}
            >
              Pre-filled V2
            </button>
          </div>
          <span className="text-xs text-gray-500 italic">V1 and V2 differ only in the Searcher tab</span>
        </div>
      </div>

      {/* App Body */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeView} onViewChange={setActiveView} mode={mode} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto">
            {renderMainContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
