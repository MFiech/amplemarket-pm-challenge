import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ChevronDown, ChevronRight, BarChart3, Home, Search, Bookmark, List, Send, Phone, CheckSquare, Users, ServerCog, PanelLeftClose, PanelLeftOpen, Settings } from "lucide-react";

type ViewType = "overview" | "sequences" | "contacts" | "analytics" | "searcher" | "searcher-empty" | "saved-lists" | "lists" | "calls" | "tasks" | "workflows" | "duo-copilot" | "settings";
type Mode = "empty" | "prefilled";

interface SidebarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
  mode?: Mode;
}

interface SectionState {
  prospect: boolean;
  engage: boolean;
  analyze: boolean;
  automate: boolean;
}

export default function Sidebar({ activeView, onViewChange, mode }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedSections, setExpandedSections] = useState<SectionState>({
    prospect: true,
    engage: true,
    analyze: true,
    automate: true,
  });

  const toggleSection = (section: keyof SectionState) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const NavButton = ({ 
    view, 
    icon: Icon, 
    children, 
    className = "",
    disabled = false,
    tooltip,
    showNew = false
  }: { 
    view: ViewType; 
    icon: React.ComponentType<any>; 
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    tooltip?: string;
    showNew?: boolean;
  }) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const handleClick = () => {
      if (disabled) {
        setTooltipOpen(true);
        window.setTimeout(() => setTooltipOpen(false), 1500);
        return;
      }
      onViewChange(view);
    };

    if (collapsed) {
      const iconButton = (
        <Button
          variant="ghost"
          className={`w-10 h-10 p-0 flex items-center justify-center ${
            activeView === view && !disabled
              ? "bg-gray-200 text-gray-900"
              : disabled
                ? "text-gray-300 cursor-default opacity-40"
                : "text-gray-600 hover:bg-gray-100"
          } ${className}`}
          onClick={handleClick}
          data-testid={`nav-${view}`}
        >
          <Icon className="h-4 w-4" />
        </Button>
      );

      return (
        <TooltipProvider>
          <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen} delayDuration={0}>
            <TooltipTrigger asChild>
              <div>{iconButton}</div>
            </TooltipTrigger>
            <TooltipContent side="right">{tooltip || children}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    const button = (
      <Button
        variant="ghost"
        className={`w-full justify-start text-sm font-medium h-auto py-2 px-3 border ${
          activeView === view && !disabled
            ? "bg-gray-200 text-gray-900 border-gray-400"
            : disabled
              ? "text-gray-300 border-transparent cursor-default opacity-40"
              : "text-gray-600 hover:bg-gray-100 border-transparent"
        } ${className}`}
        onClick={handleClick}
        data-testid={`nav-${view}`}
      >
        <Icon className="mr-3 h-4 w-4" />
        <div className="flex items-center justify-between flex-1">
          <span>{children}</span>
          {showNew && (
            <Badge variant="secondary" className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-0.5 h-5">New</Badge>
          )}
        </div>
      </Button>
    );

    if (tooltip) {
      return (
        <TooltipProvider>
          <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen} delayDuration={0}>
            <TooltipTrigger asChild>
              <div>{button}</div>
            </TooltipTrigger>
            <TooltipContent side="right">{tooltip}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    }

    return button;
  };

  const SectionToggle = ({ 
    section, 
    children 
  }: { 
    section: keyof SectionState; 
    children: React.ReactNode;
  }) => (
    <Button
      variant="ghost"
      className="w-full justify-between text-sm text-gray-600 hover:bg-gray-100 h-auto py-2 px-3"
      onClick={() => toggleSection(section)}
      data-testid={`toggle-${section}`}
    >
      <span className="flex items-center">
        {expandedSections[section] ? (
          <ChevronDown className="mr-2 h-3 w-3" />
        ) : (
          <ChevronRight className="mr-2 h-3 w-3" />
        )}
        {children}
      </span>
    </Button>
  );

  if (collapsed) {
    return (
      <div className="w-16 bg-white border-r border-gray-300 flex-shrink-0 flex flex-col" data-testid="sidebar">
        {/* Collapse toggle at top */}
        <div className="p-3 border-b border-gray-300 flex justify-center">
          <Button
            variant="ghost"
            className="w-10 h-10 p-0 flex items-center justify-center text-gray-600 hover:bg-gray-100"
            onClick={() => setCollapsed(false)}
          >
            <PanelLeftOpen className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation Icons */}
        <nav className="p-3 space-y-2 overflow-y-auto flex flex-col flex-1">
          <div className="flex-1">
            {/* Duo Copilot + Overview */}
            <div className="space-y-2">
              <NavButton 
                view="duo-copilot" 
                icon={BarChart3}
                disabled={mode === "empty"}
                tooltip={mode === "empty" ? "These sections changes only after the user completed setup and onboarding. Switch to \"Pre-filled\" version to see the changes." : undefined}
              >
                Duo Copilot
              </NavButton>
              <NavButton 
                view="overview" 
                icon={Home}
                disabled={mode === "empty"}
                tooltip={mode === "empty" ? "These sections changes only after the user completed setup and onboarding. Switch to \"Pre-filled\" version to see the changes." : undefined}
              >
                Overview
              </NavButton>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-3"></div>

            {/* Section Icons */}
            <div className="space-y-2">
              <NavButton
                view={(mode ?? "empty") === "empty" ? "searcher-empty" : "searcher"}
                icon={Search}
                showNew
              >
                Searcher
              </NavButton>
              <NavButton view="saved-lists" icon={Bookmark}>
                Saved Searches
              </NavButton>
              <NavButton view="lists" icon={List} disabled tooltip="Not available in this prototype">
                Lists
              </NavButton>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-3"></div>

            <div className="space-y-2">
              <NavButton view="sequences" icon={Send} disabled tooltip="Not available in this prototype">
                Sequences
              </NavButton>
              <NavButton view="calls" icon={Phone} disabled tooltip="Not available in this prototype">
                Calls
              </NavButton>
              <NavButton view="tasks" icon={CheckSquare} disabled tooltip="Not available in this prototype">
                Tasks
              </NavButton>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-3"></div>

            <div className="space-y-2">
              <NavButton view="analytics" icon={BarChart3} disabled tooltip="Not available in this prototype">
                Analytics
              </NavButton>
              <NavButton view="contacts" icon={Users} disabled tooltip="Not available in this prototype">
                Contacts
              </NavButton>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-3"></div>

            <div className="space-y-2">
              <NavButton view="workflows" icon={ServerCog} disabled tooltip="Not available in this prototype">
                Workflows
              </NavButton>
            </div>
          </div>

          {/* Settings at very bottom */}
          <div className="pt-3 border-t border-gray-300">
            <NavButton view="settings" icon={Settings}>
              Settings
            </NavButton>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white border-r border-gray-300 flex-shrink-0 flex flex-col" data-testid="sidebar">
      {/* Header */}
      <div className="p-4 border-b border-gray-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
              <BarChart3 className="text-white h-4 w-4" />
            </div>
            <h1 className="text-lg font-semibold text-gray-900">Amplemarket</h1>
          </div>
          <Button
            variant="ghost"
            className="p-2 text-gray-600 hover:bg-gray-100"
            onClick={() => setCollapsed(true)}
          >
            <PanelLeftClose className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-1 overflow-y-auto flex flex-col h-full">
        <div className="flex-1">
          {/* Duo Copilot + Overview grouped */}
          <div className="mb-4 space-y-1">
            <NavButton 
              view="duo-copilot" 
              icon={BarChart3}
              disabled={mode === "empty"}
              tooltip={mode === "empty" ? "These sections changes only after the user completed setup and onboarding. Switch to \"Pre-filled\" version to see the changes." : undefined}
            >
              Duo Copilot
            </NavButton>
            <NavButton 
              view="overview" 
              icon={Home}
              disabled={mode === "empty"}
              tooltip={mode === "empty" ? "These sections changes only after the user completed setup and onboarding. Switch to \"Pre-filled\" version to see the changes." : undefined}
            >
              Overview
            </NavButton>
          </div>

          {/* Prospect Section */}
          <div className="mb-4">
            <SectionToggle section="prospect">Prospect</SectionToggle>
            {expandedSections.prospect && (
              <div className="ml-6 mt-1 space-y-1">
                <NavButton
                  view={(mode ?? "empty") === "empty" ? "searcher-empty" : "searcher"}
                  icon={Search}
                  showNew
                >
                  Searcher
                </NavButton>
                <NavButton view="saved-lists" icon={Bookmark}>
                  Saved Searches
                </NavButton>
                <NavButton view="lists" icon={List} disabled tooltip="Not available in this prototype">
                  Lists
                </NavButton>
              </div>
            )}
          </div>

          {/* Engage Section */}
          <div className="mb-4">
            <SectionToggle section="engage">Engage</SectionToggle>
            {expandedSections.engage && (
              <div className="ml-6 mt-1 space-y-1">
                <NavButton view="sequences" icon={Send} disabled tooltip="Not available in this prototype">
                  Sequences
                </NavButton>
                <NavButton view="calls" icon={Phone} disabled tooltip="Not available in this prototype">
                  Calls
                </NavButton>
                <NavButton view="tasks" icon={CheckSquare} disabled tooltip="Not available in this prototype">
                  Tasks
                </NavButton>
              </div>
            )}
          </div>

          {/* Analyze Section */}
          <div className="mb-4">
            <SectionToggle section="analyze">Analyze</SectionToggle>
            {expandedSections.analyze && (
              <div className="ml-6 mt-1 space-y-1">
                <NavButton view="analytics" icon={BarChart3} disabled tooltip="Not available in this prototype">
                  Analytics
                </NavButton>
                <NavButton view="contacts" icon={Users} disabled tooltip="Not available in this prototype">
                  Contacts
                </NavButton>
              </div>
            )}
          </div>

          {/* Automate Section */}
          <div className="mb-4">
            <SectionToggle section="automate">Automate</SectionToggle>
            {expandedSections.automate && (
              <div className="ml-6 mt-1 space-y-1">
                <NavButton view="workflows" icon={ServerCog} disabled tooltip="Not available in this prototype">
                  Workflows
                </NavButton>
              </div>
            )}
          </div>
        </div>

        {/* Settings at very bottom */}
        <div className="pt-4 border-t border-gray-300">
          <NavButton view="settings" icon={Settings}>
            Settings
          </NavButton>
        </div>
      </nav>
    </div>
  );
}
