import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, Phone, Mail, Send, ArrowUpDown, ChevronDown, ChevronRight, X, Calendar, Info } from "lucide-react";

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

interface SearcherProps {
  mode?: "empty" | "prefilled-v1" | "prefilled-v2";
  onModeChange?: (mode: "prefilled-v1" | "prefilled-v2") => void;
}

export default function Searcher({ mode = "empty", onModeChange }: SearcherProps) {
  const isPrefilled = mode === "prefilled-v1" || mode === "prefilled-v2";
  
  const [expandedFilters, setExpandedFilters] = useState({
    competitorsIntelligence: mode === "prefilled-v1", // Only expand for V1, not V2
    churnAlerts: false,
    seniority: isPrefilled
  });

  const [competitorChips, setCompetitorChips] = useState(
    isPrefilled ? (mode === "prefilled-v1" ? ["ACME", "Google", "Apple"] : ["Salesforce", "HubSpot", "Pipedrive"]) : []
  );
  const [seniorityChips, setSeniorityChips] = useState(
    isPrefilled ? (mode === "prefilled-v1" ? ["VP", "Head"] : ["Director", "C-Level"]) : []
  );
  const [dateFilter, setDateFilter] = useState("last_2_weeks");

  // Update filter states when mode changes
  useEffect(() => {
    const isPrefilled = mode === "prefilled-v1" || mode === "prefilled-v2";
    
    setExpandedFilters({
      competitorsIntelligence: mode === "prefilled-v1", // Only expand for V1, not V2
      churnAlerts: false,
      seniority: isPrefilled
    });

    setCompetitorChips(
      isPrefilled ? (mode === "prefilled-v1" ? ["ACME", "Google", "Apple"] : ["Salesforce", "HubSpot", "Pipedrive"]) : []
    );

    setSeniorityChips(
      isPrefilled ? (mode === "prefilled-v1" ? ["VP", "Head"] : ["Director", "C-Level"]) : []
    );
  }, [mode]);

  // For V2, show all prospects but only some have interaction text
  const filteredLeads = mockLeads;

  // Function to generate random interaction data
  const getRandomInteraction = (leadId: number) => {
    // In V2, only show interactions for specific prospects (IDs 2, 4, 6)
    if (mode === "prefilled-v2" && ![2, 4, 6].includes(leadId)) {
      return null; // No interaction text for these prospects
    }
    
    const companies = mode === "prefilled-v1" 
      ? ["ACME", "Google", "Apple"] 
      : mode === "prefilled-v2" 
        ? ["Salesforce", "HubSpot", "Pipedrive"]
        : [];
    const randomCompany = companies[leadId % companies.length];
    const randomInteractions = Math.floor(Math.random() * 9) + 1; // 1-9 interactions
    return `Engaged with ${randomCompany} ${randomInteractions} times in the last 2 weeks.`;
  };

  // Function to generate sample interactions for tooltip
  const getSampleInteractions = (leadId: number) => {
    const companies = mode === "prefilled-v1" 
      ? ["ACME", "Google", "Apple"] 
      : mode === "prefilled-v2" 
        ? ["Salesforce", "HubSpot", "Pipedrive"]
        : [];
    const randomCompany = companies[leadId % companies.length];
    
    const sampleInteractions = [
      `Liked ${randomCompany}'s LinkedIn post about AI`,
      `Attended ${randomCompany}'s webinar "Future of Sales"`,
      `Downloaded ${randomCompany}'s whitepaper`,
      `Visited ${randomCompany}'s pricing page`,
      `Connected with ${randomCompany}'s sales rep`
    ];
    
    const maxToShow = 3;
    const selectedInteractions = sampleInteractions.slice(0, maxToShow);
    const hasMore = sampleInteractions.length > maxToShow;
    
    return {
      interactions: selectedInteractions,
      hasMore
    };
  };

  const toggleFilter = (filterName: keyof typeof expandedFilters) => {
    // If in V2 and clicking CI, switch to V1
    if (mode === "prefilled-v2" && filterName === "competitorsIntelligence") {
      onModeChange?.("prefilled-v1");
      return;
    }
    
    // Prevent expansion of certain filters based on mode
    if (mode === "prefilled-v2" && (filterName === "competitorsIntelligence" || filterName === "churnAlerts")) {
      return; // Do nothing - don't allow expansion
    }
    if ((mode === "prefilled-v1" || mode === "prefilled-v2") && filterName === "churnAlerts") {
      return; // Disable churn alerts expansion in both V1 and V2
    }
    
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const ChipInput = ({ chips, placeholder }: {
    chips: string[];
    placeholder: string;
  }) => (
    <div className="border border-gray-300 rounded-md p-2 min-h-[32px] bg-white">
      <div className="flex flex-wrap gap-1">
        {chips.map((chip, index) => (
          <Badge key={index} variant="secondary" className="bg-gray-200 text-gray-700 hover:bg-gray-200 text-xs px-2 py-0.5 h-5 flex items-center gap-1">
            {chip}
            <X className="h-3 w-3" />
          </Badge>
        ))}
        {chips.length === 0 && (
          <span className="text-gray-400 text-sm">{placeholder}</span>
        )}
      </div>
    </div>
  );

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
  }) => {
    const isChurnAlerts = filterKey === "churnAlerts";
    const isCompetitorsIntelligenceInV1 = mode === "prefilled-v1" && filterKey === "competitorsIntelligence";
    
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <button
            onClick={() => toggleFilter(filterKey)}
            className={`flex items-center text-left text-sm text-gray-700 hover:text-gray-900 focus:outline-none flex-1 ${
              isChurnAlerts ? "cursor-default hover:text-gray-700" : ""
            }`}
          >
            {expandedFilters[filterKey] ? (
              <ChevronDown className="h-3 w-3 mr-2 text-gray-500" />
            ) : (
              <ChevronRight className="h-3 w-3 mr-2 text-gray-500" />
            )}
            {name}
          </button>
          {isCompetitorsIntelligenceInV1 && (
            <button
              onClick={() => onModeChange?.("prefilled-v2")}
              className="text-xs text-blue-600 hover:text-blue-800 ml-2 focus:outline-none"
            >
              clear
            </button>
          )}
        </div>
        {expandedFilters[filterKey] && (
          <div className="ml-5 space-y-1">
            {children}
          </div>
        )}
      </div>
    );
  };

  const LeadCard = ({ lead, mode }: { lead: typeof mockLeads[0]; mode: "empty" | "prefilled-v1" | "prefilled-v2" }) => {
    if (mode === "prefilled-v1" || mode === "prefilled-v2") {
      return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50" data-testid={`lead-${lead.id}`}>
          <div className="flex items-center space-x-4">
            <input type="checkbox" className="h-4 w-4 text-gray-600" />
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
              {lead.avatar}
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <h4 className="font-medium text-gray-900">{lead.name}</h4>
              </div>
              <div className="h-3 rounded bg-gray-300 w-32"></div>
              <div className="h-3 rounded bg-gray-300 w-28"></div>
              {getRandomInteraction(lead.id) && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center gap-1">
                        <p className="text-xs text-gray-600 font-semibold">{getRandomInteraction(lead.id)}</p>
                        <Info className="h-3 w-3 text-gray-400 cursor-help" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="max-w-xs">
                      <div className="space-y-1">
                        <p className="font-medium text-xs">Sample interactions:</p>
                        {getSampleInteractions(lead.id).interactions.map((interaction, index) => (
                          <p key={index} className="text-xs">• {interaction}</p>
                        ))}
                        {getSampleInteractions(lead.id).hasMore && (
                          <p className="text-xs italic">...and more</p>
                        )}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="space-y-2">
              <div className="h-4 rounded bg-gray-300 w-20"></div>
              <div className="h-3 rounded bg-gray-300 w-24"></div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="p-2 text-gray-400 cursor-default">
                <Mail className="h-4 w-4" />
              </div>
              <div className="p-2 text-gray-400 cursor-default">
                <Phone className="h-4 w-4" />
              </div>
              <div className="p-2 text-gray-400 cursor-default">
                <Send className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50" data-testid={`lead-${lead.id}`}>
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="h-4 w-4 text-gray-600" />
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
            {lead.avatar}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-medium text-gray-900">{lead.name}</h4>
              <span className="text-gray-500">in</span>
              <span className="text-gray-500">LinkedIn</span>
            </div>
            <p className="text-sm text-gray-500">{lead.title}</p>
            <p className="text-sm text-gray-400">{lead.location}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">{lead.company}</span>
              <span className="text-gray-500">in</span>
              <span className="text-gray-500">LinkedIn</span>
            </div>
            <p className="text-sm text-gray-400">{lead.employees}</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="p-2 text-gray-400 cursor-default">
              <Mail className="h-4 w-4" />
            </div>
            <div className="p-2 text-gray-400 cursor-default">
              <Phone className="h-4 w-4" />
            </div>
            <div className="p-2 text-gray-400 cursor-default">
              <Send className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full" data-testid="searcher">
      {/* Left Sidebar - Filters */}
      <div className="w-80 bg-gray-50 border-r border-gray-300 p-4">
        <div className="flex items-center mb-4">
          <h3 className="font-bold text-gray-900 text-xs tracking-wide">SMART INSIGHTS</h3>
          <Badge variant="secondary" className="ml-2 bg-gray-200 text-gray-700 text-xs px-2 py-0.5 h-5">New</Badge>
        </div>
        <div className="mb-6 space-y-3">
          <CollapsibleFilter name="Competitors Intelligence" filterKey="competitorsIntelligence">
            {isPrefilled ? (
              <div className="space-y-3">
                <ChipInput
                  chips={competitorChips}
                  placeholder="Add competitors..."
                />
                <div className="space-y-1">
                  <label className="text-xs text-gray-600">Interaction detection dates</label>
                  <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger className="h-8 text-xs border-gray-300 bg-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last_week">Last week</SelectItem>
                      <SelectItem value="last_2_weeks">Last 2 weeks</SelectItem>
                      <SelectItem value="last_month">Last month</SelectItem>
                      <SelectItem value="last_3_months">Last 3 months</SelectItem>
                      <SelectItem value="custom">Custom range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : (
              <>
                <div className="h-3 rounded bg-gray-300 w-28" />
                <div className="h-3 rounded bg-gray-300 w-20" />
              </>
            )}
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
            {isPrefilled ? (
              <ChipInput
                chips={seniorityChips}
                placeholder="Add seniority levels..."
              />
            ) : (
              <>
                <div className="h-3 rounded bg-gray-300 w-20" />
                <div className="h-3 rounded bg-gray-300 w-28" />
                <div className="h-3 rounded bg-gray-300 w-16" />
              </>
            )}
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
      <div className="flex-1">
        {/* Header */}
        <div className="p-4 border-b border-gray-300 bg-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Check className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">0 Selected</span>
              </span>
              <Button variant="outline" size="sm" className="text-sm border-gray-300 cursor-default hover:bg-gray-50">
                Track Job Changes
              </Button>
              <Button variant="outline" size="sm" className="text-sm border-gray-300 bg-gray-50 text-gray-700 cursor-default hover:bg-gray-50">
                Add to List
              </Button>
              <Button variant="outline" size="sm" className="text-sm border-gray-300 bg-gray-50 text-gray-700 cursor-default hover:bg-gray-50">
                Add to Sequence
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">1 - 30 of 2,249,478</span>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-sm cursor-default hover:bg-transparent">
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
            {filteredLeads.map((lead) => (
              <LeadCard key={lead.id} lead={lead} mode={mode} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}