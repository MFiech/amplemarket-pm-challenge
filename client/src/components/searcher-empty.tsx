import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ChevronDown, ChevronRight } from "lucide-react";

export default function SearcherEmpty() {
  const [expandedFilters, setExpandedFilters] = useState({
    competitorsIntelligence: false,
    churnAlerts: false,
    seniority: false
  });

  const toggleFilter = (filterName: keyof typeof expandedFilters) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
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
        <h3 className="font-bold text-gray-900 mb-4 text-xs tracking-wide">SMART INSIGHTS</h3>
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
            <div className="mb-6">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                The search for your next customer starts here!
              </h3>
              <p className="text-gray-500 mb-6">
                Use the filters on the left or try one of the samples below
              </p>
            </div>

            {/* Recommended Searches */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Recommended Searches</h4>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-between text-left border-gray-300">
                  <span>Leads engaging with Cloudinteractive Competitors</span>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Engaging</span>
                </Button>
                <Button variant="outline" className="w-full justify-between text-left border-gray-300">
                  <span>Tracked Contacts that were promoted</span>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Promotion</span>
                </Button>
              </div>
            </div>

            {/* Example Searches */}
            <div className="mb-8">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Example Searches</h4>
              <div className="space-y-2 text-left">
                <div className="text-sm text-gray-600">• Sales Managers working for Microsoft in Seattle</div>
                <div className="text-sm text-gray-600">• Office Managers working in companies with 51-200 employees in Boston</div>
                <div className="text-sm text-gray-600">• Marketing Managers in the Restaurant industry</div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Upcoming events and conferences</h4>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}