import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown, ChevronRight } from "lucide-react";

interface SearcherEmptyProps {
  onSwitchToPrefilled?: (mode?: "prefilled-v1" | "prefilled-v2") => void;
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
          <CardContent className="p-12">
            {/* Header - One column, centered */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your next deal is a click away 🎯</h2>
              <p className="text-lg text-gray-600">Leverage our Searcher to browse our database of 200M+ high-quality leads.</p>
            </div>

            {/* Two ways header */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900">You can start in two ways:</h3>
            </div>

            {/* Two approaches - Two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Column 1 - Manual search */}
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🔍 Specify search criteria</h3>
                <p className="text-gray-600 mb-4 flex-grow">Use any of 40+ filters about person or company.</p>
                <Button 
                  className="w-full bg-gray-400 hover:bg-gray-500 text-white"
                  onClick={() => onSwitchToPrefilled?.("prefilled-v2")}
                >
                  Start with filters
                </Button>
              </div>

              {/* Column 2 - AI/Competitor search */}
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors flex flex-col">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">🤖 Find prospects evaluating your competitors</h3>
                <p className="text-gray-600 mb-4 flex-grow">Let our AI-algorithm show you the prospects who have interacted with your competitors many times.</p>
                <Button 
                  className="w-full bg-gray-400 hover:bg-gray-500 text-white"
                  onClick={() => onSwitchToPrefilled?.("prefilled-v1")}
                >
                  Show competitor prospects
                </Button>
              </div>
            </div>

            {/* Mix option - One column */}
            <div className="text-center mb-12">
              <p className="text-gray-600">... or mix & add these two ways together 🚀</p>
            </div>

            {/* Recommended searches - One column */}
            <div className="text-center mb-6">
              <p className="text-gray-700 mb-6">Still not sure? Use some of the recommended searches for your product & industry: 💡</p>
              
              {/* Sample searches - 3-column layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <button 
                  className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors text-center"
                  onClick={() => onSwitchToPrefilled?.("prefilled-v1")}
                >
                  <span className="font-medium text-gray-900">💼 SaaS Decision Makers</span>
                </button>
                <button 
                  className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors text-center"
                  onClick={() => onSwitchToPrefilled?.("prefilled-v1")}
                >
                  <span className="font-medium text-gray-900">🏢 Enterprise IT Leaders</span>
                </button>
                <button 
                  className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-colors text-center"
                  onClick={() => onSwitchToPrefilled?.("prefilled-v1")}
                >
                  <span className="font-medium text-gray-900">📈 Marketing Directors</span>
                </button>
              </div>
            </div>

            {/* Footer help link */}
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Have any questions? Check our{" "}
                <a 
                  href="https://university.amplemarket.com/courses/searcher" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Help Article on Searcher
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}