import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown } from "lucide-react";

export default function SearcherEmpty() {
  const FilterSection = ({ title, items }: { title: string; items: string[] }) => (
    <div className="mb-6">
      <Button
        variant="ghost"
        className="w-full justify-between text-sm font-medium text-gray-700 hover:bg-gray-100 h-auto py-2 px-3 mb-2"
      >
        <span>{title}</span>
        <ChevronDown className="h-3 w-3" />
      </Button>
      <div className="space-y-1 ml-4">
        {items.map((item, index) => (
          <div key={index} className="text-sm text-gray-600 py-1">{item}</div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-full" data-testid="searcher-empty">
      {/* Left Sidebar - Filters */}
      <div className="w-80 bg-gray-50 border-r border-gray-300 p-4">
        <h3 className="font-semibold text-gray-900 mb-4 text-sm">Filters</h3>
        
        <FilterSection
          title="INTELLIGENCE"
          items={["Job Change Alerts", "Buying Intent Signals", "Personas", "CRM Based Filters"]}
        />
        
        <FilterSection
          title="PERSON"
          items={["Name", "Titles", "Recent Job Changes", "Locations", "Keywords", "LinkedIn Networks"]}
        />
        
        <FilterSection
          title="COMPANY"
          items={["Current Company", "Past Company", "Keywords"]}
        />
      </div>

      {/* Right Main Content */}
      <div className="flex-1 p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              type="text" 
              placeholder="Search contacts by name, email, or company domain" 
              className="pl-10 pr-4 py-3 w-full border-2 border-gray-300"
              data-testid="search-input"
            />
          </div>
          <div className="flex justify-end mt-2">
            <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6" data-testid="save-search">
              Save Search
            </Button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-300 mb-8">
          <nav className="flex space-x-8">
            <Button variant="ghost" className="py-2 text-sm font-medium border-b-2 border-gray-600 text-gray-900 rounded-none">
              Overview
            </Button>
            <Button variant="ghost" className="py-2 text-sm font-medium text-gray-500 rounded-none">
              Events And Conferences
            </Button>
            <Button variant="ghost" className="py-2 text-sm font-medium text-gray-500 rounded-none">
              Company Hubs
            </Button>
          </nav>
        </div>

        {/* Empty State Content */}
        <Card className="border-2 border-dashed border-gray-300" data-testid="empty-state">
          <CardContent className="p-12 text-center">
            <div className="mb-6">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                The search for your next customer starts here!
              </h3>
              <p className="text-gray-500 mb-6">
                Use the search bar on the left or try one of the samples below
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