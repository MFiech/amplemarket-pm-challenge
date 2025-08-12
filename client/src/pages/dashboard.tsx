import { useState } from "react";
import Sidebar from "@/components/sidebar";
import SequenceOverview from "@/components/sequence-overview";
import ContactFeed from "@/components/contact-feed";
import ContactsView from "@/components/contacts-view";
import AnalyticsView from "@/components/analytics-view";
import SearcherEmpty from "@/components/searcher-empty";
import Searcher from "@/components/searcher";
import WireframePlaceholder from "@/components/wireframe-placeholder";

type ViewType = "overview" | "sequences" | "contacts" | "analytics" | "searcher" | "searcher-empty" | "saved-lists" | "lists" | "calls" | "tasks" | "workflows" | "duo-copilot";

export default function Dashboard() {
  const [activeView, setActiveView] = useState<ViewType>("overview");

  const renderMainContent = () => {
    switch (activeView) {
      case "overview":
        return <WireframePlaceholder title="Overview" />;
      case "sequences":
        return <WireframePlaceholder title="Sequences" />;
      case "contacts":
        return <WireframePlaceholder title="Contacts" />;
      case "analytics":
        return <WireframePlaceholder title="Analytics" />;
      case "searcher-empty":
        return <SearcherEmpty />;
      case "searcher":
        return <Searcher />;
      case "duo-copilot":
        return <WireframePlaceholder title="Duo Copilot" />;
      default:
        return <WireframePlaceholder title={activeView.charAt(0).toUpperCase() + activeView.slice(1).replace('-', ' ')} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}
