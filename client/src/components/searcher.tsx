import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, Check, Phone, Mail, Send, ArrowUpDown } from "lucide-react";

const mockLeads = [
  {
    id: 1,
    name: "Michael Lupo",
    title: "Enterprise Account Executive",
    company: "Ceros",
    location: "New York, NY, United States",
    employees: "201-500 employees",
    avatar: "ML"
  },
  {
    id: 2,
    name: "Jamie T",
    title: "Community Program Manager",
    company: "Evanta",
    location: "Dallas, Texas, United States", 
    employees: "201-500 employees",
    avatar: "JT"
  },
  {
    id: 3,
    name: "Joshua Jenks",
    title: "Sales Development Representative 3",
    company: "Athelas",
    location: "American Fork, Utah, United States",
    employees: "201-500 employees",
    avatar: "JJ"
  },
  {
    id: 4,
    name: "Lyndsey Weinberg",
    title: "Account Executive",
    company: "JumpCrew",
    location: "Morrison, Tennessee, United States",
    employees: "201-500 employees",
    avatar: "LW"
  },
  {
    id: 5,
    name: "Brandon Gahol",
    title: "Sales Development Representative",
    company: "Aprimo",
    location: "Chicago, Illinois, United States",
    employees: "201-500 employees",
    avatar: "BG"
  },
  {
    id: 6,
    name: "Kevin Kiernan",
    title: "Channel Account Manager",
    company: "Vasion",
    location: "South Jordan, Utah, United States",
    employees: "201-500 employees",
    avatar: "KK"
  },
  {
    id: 7,
    name: "Kamden Luke",
    title: "New Business Director - Agency",
    company: "Ceros",
    location: "New York, NY, United States",
    employees: "201-500 employees",
    avatar: "KL"
  }
];

export default function Searcher() {
  const FilterSection = ({ title, items, expanded = false }: { title: string; items: string[]; expanded?: boolean }) => (
    <div className="mb-4">
      <Button
        variant="ghost"
        className="w-full justify-between text-sm font-medium text-gray-700 hover:bg-gray-100 h-auto py-2 px-3 mb-2"
      >
        <span>{title}</span>
        <ChevronDown className="h-3 w-3" />
      </Button>
      {expanded && (
        <div className="space-y-1 ml-4">
          {items.map((item, index) => (
            <div key={index} className="text-sm text-gray-600 py-1">{item}</div>
          ))}
        </div>
      )}
    </div>
  );

  const LeadCard = ({ lead }: { lead: typeof mockLeads[0] }) => (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50" data-testid={`lead-${lead.id}`}>
      <div className="flex items-center space-x-4">
        <input type="checkbox" className="h-4 w-4 text-gray-600" />
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
          {lead.avatar}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <h4 className="font-medium text-gray-900">{lead.name}</h4>
            <span className="text-blue-500">in</span>
            <span className="text-blue-500">LinkedIn</span>
          </div>
          <p className="text-sm text-gray-500">{lead.title}</p>
          <p className="text-sm text-gray-400">{lead.location}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-500">{lead.company}</span>
            <span className="text-blue-500">in</span>
            <span className="text-blue-500">LinkedIn</span>
          </div>
          <p className="text-sm text-gray-400">{lead.employees}</p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
            <Mail className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
            <Phone className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-blue-500 hover:bg-blue-50">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-full" data-testid="searcher">
      {/* Left Sidebar - Filters */}
      <div className="w-80 bg-gray-50 border-r border-gray-300 p-4">
        <h3 className="font-semibold text-gray-900 mb-4 text-sm">INTELLIGENCE</h3>
        
        <FilterSection
          title="Job Change Alerts"
          items={[]}
        />
        
        <FilterSection
          title="Buying Intent Signals"
          items={[]}
        />
        
        <FilterSection
          title="Personas"
          items={[]}
        />
        
        <FilterSection
          title="CRM Based Filters"
          items={[]}
        />

        <h3 className="font-semibold text-gray-900 mb-4 mt-6 text-sm">PERSON</h3>
        
        <FilterSection
          title="Name"
          items={[]}
        />
        
        <FilterSection
          title="Titles"
          items={["Seniorities", "Select seniorities..."]}
          expanded={true}
        />

        <div className="mb-4">
          <Input placeholder="marketing" className="text-sm border-gray-300" />
        </div>
        
        <FilterSection
          title="Departments & Job Functions"
          items={["Sales", "Education", "Finance", "Information Technology", "Engineering Technical", "Operations", "Marketing", "Human Resources", "C-Suite", "Design", "Consulting"]}
          expanded={true}
        />
      </div>

      {/* Right Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="p-4 border-b border-gray-300 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Check className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">0 Selected</span>
              </span>
              <Button variant="outline" size="sm" className="text-sm border-gray-300">
                Track Job Changes
              </Button>
              <Button variant="outline" size="sm" className="text-sm border-gray-300 bg-blue-50 text-blue-700">
                Add to List
              </Button>
              <Button variant="outline" size="sm" className="text-sm border-gray-300 bg-blue-50 text-blue-700">
                Add to Sequence
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">1 - 30 of 2,249,478</span>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-sm">
                  <ArrowUpDown className="h-4 w-4 mr-1" />
                  Sort by: Relevancy
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <Card className="border-0 rounded-none" data-testid="search-results">
          <CardContent className="p-0">
            {mockLeads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}