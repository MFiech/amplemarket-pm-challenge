import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown, ChevronRight } from "lucide-react";

interface SearcherEmptyProps {
  onSwitchToPrefilled?: () => void;
}

export default function SearcherEmpty({ onSwitchToPrefilled }: SearcherEmptyProps) {
  const [expandedFilters, setExpandedFilters] = useState({
    competitorsIntelligence: false,
    churnAlerts: false,
    seniority: false
  });

  const toggleFilter = (filterName: keyof typeof expandedFilters) => {
    // Instead of expanding, switch to prefilled mode when collapsible filters are clicked
    if (onSwitchToPrefilled) {
      onSwitchToPrefilled();
    }
  };

  const WireframeList = () => {
    const widths = ["w-24", "w-32", "w-20", "w-28", "w-16", "w-36"];
    return (
      <div className="space-y-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-2 text-gray-500 flex-shrink-0" />
            <div className={`h-4 rounded bg-gray-300 ${widths[index]}`} />
          </div>
        ))}
      </div>
    );
  };

  const CollapsibleFilter = ({ name, filterKey, children }: { 
    name: string; 
    filterKey: keyof typeof expandedFilters;
    children: React.ReactNode;
  }) => (
    <div className="space-y-2">
      <button
        onClick={() => toggleFilter(filterKey)}
        className="flex items-center w-full text-left text-sm text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        {expandedFilters[filterKey] ? (
          <ChevronDown className="h-3 w-3 mr-2 text-gray-500" />
        ) : (
          <ChevronRight className="h-3 w-3 mr-2 text-gray-500" />
        )}
        {name}
      </button>
      {expandedFilters[filterKey] && (
        <div className="ml-5 space-y-1">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="flex h-full" data-testid="searcher-empty">
      {/* Left Sidebar - Filters */}
      <div className="w-80 bg-gray-50 border-r border-gray-300 p-4">
        <div className="flex items-center mb-4">
          <h3 className="font-bold text-gray-900 text-xs tracking-wide">SMART INSIGHTS</h3>
          <Badge variant="secondary" className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-0.5 h-5">New</Badge>
        </div>
        <div className="mb-6 space-y-3">
          <CollapsibleFilter name="Competitors Intelligence" filterKey="competitorsIntelligence">
            <div className="h-3 rounded bg-gray-300 w-28" />
            <div className="h-3 rounded bg-gray-300 w-20" />
          </CollapsibleFilter>
          <CollapsibleFilter name="Churn alerts" filterKey="churnAlerts">
            <div className="h-3 rounded bg-gray-300 w-24" />
            <div className="h-3 rounded bg-gray-300 w-32" />
          </CollapsibleFilter>
        </div>
        <h3 className="font-bold text-gray-900 mb-4 text-xs tracking-wide">PERSON</h3>
        <div className="mb-6 space-y-3">
          <div className="space-y-2">
            <div className="flex items-center">
              <ChevronRight className="h-3 w-3 mr-2 text-gray-500 flex-shrink-0" />
              <div className="h-4 rounded bg-gray-300 w-24" />
            </div>
            <div className="flex items-center">
              <ChevronRight className="h-3 w-3 mr-2 text-gray-500 flex-shrink-0" />
              <div className="h-4 rounded bg-gray-300 w-32" />
            </div>
          </div>
          <CollapsibleFilter name="Seniority" filterKey="seniority">
            <div className="h-3 rounded bg-gray-300 w-20" />
            <div className="h-3 rounded bg-gray-300 w-28" />
            <div className="h-3 rounded bg-gray-300 w-16" />
          </CollapsibleFilter>
        </div>
        <h3 className="font-bold text-gray-900 mb-4 text-xs tracking-wide">COMPANY</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-2 text-gray-500 flex-shrink-0" />
            <div className="h-4 rounded bg-gray-300 w-28" />
          </div>
          <div className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-2 text-gray-500 flex-shrink-0" />
            <div className="h-4 rounded bg-gray-300 w-20" />
          </div>
          <div className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-2 text-gray-500 flex-shrink-0" />
            <div className="h-4 rounded bg-gray-300 w-36" />
          </div>
          <div className="flex items-center">
            <ChevronRight className="h-3 w-3 mr-2 text-gray-500 flex-shrink-0" />
            <div className="h-4 rounded bg-gray-300 w-24" />
          </div>
        </div>
      </div>

      {/* Right Main Content */}
      <div className="flex-1 p-6">
        {/* Removed top search bar and tabs per requirements */}

        {/* Empty State Content */}
        <Card className="border-2 border-dashed border-gray-300" data-testid="empty-state">
          <CardContent className="p-12 text-center">
            {/* Empty for now - will be rewritten soon */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}