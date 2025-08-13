import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Send, ChevronRight, Watch, UserCheck, Users, Mail } from "lucide-react";
import { mockSequenceMetrics } from "@/lib/mock-data";
import WireframePlaceholder from "@/components/wireframe-placeholder";

type TabType = 'overview' | 'contacted' | 'remaining';

interface OverviewViewProps {
  mode?: "empty" | "prefilled-v1" | "prefilled-v2";
}

export default function OverviewView({ mode = "empty" }: OverviewViewProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const MetricCard = ({ 
    icon: Icon, 
    label, 
    value, 
    testId 
  }: { 
    icon: any; 
    label: string; 
    value: number; 
    testId: string;
  }) => (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center mb-2">
          <Icon className="text-slate-400 mr-2 h-4 w-4" />
          <span className="text-sm font-medium text-slate-600">{label}</span>
        </div>
        <div className="text-2xl font-bold text-slate-900" data-testid={testId}>
          {value.toLocaleString()}
        </div>
      </CardContent>
    </Card>
  );

  const TabButton = ({ 
    tab, 
    children, 
    isActive 
  }: { 
    tab: TabType; 
    children: React.ReactNode; 
    isActive: boolean;
  }) => (
    <Button
      variant="ghost"
      className={`py-2 text-sm font-medium border-b-2 rounded-none ${
        isActive 
          ? 'text-brand-600 border-brand-600' 
          : 'text-slate-500 border-transparent hover:text-slate-700'
      }`}
      onClick={() => setActiveTab(tab)}
      data-testid={`tab-${tab}`}
    >
      {children}
    </Button>
  );

  const isPrefilled = mode === "prefilled-v1" || mode === "prefilled-v2";

  if (!isPrefilled) {
    return <WireframePlaceholder title="Overview" />;
  }

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-slate-500 mb-6" data-testid="breadcrumb">
        <Send className="h-4 w-4 text-brand-600" />
        <span>Sequences</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-slate-900 font-medium">20k leads sequence</span>
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Live</Badge>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="flex space-x-8">
          <TabButton tab="overview" isActive={activeTab === 'overview'}>
            Overview
          </TabButton>
          <TabButton tab="contacted" isActive={activeTab === 'contacted'}>
            Contacted Leads
          </TabButton>
          <TabButton tab="remaining" isActive={activeTab === 'remaining'}>
            Remaining Leads
          </TabButton>
        </nav>
      </div>

      {/* Sequence Information */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Sequence Information</h2>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-6">
          <MetricCard 
            icon={Watch}
            label="Active"
            value={mockSequenceMetrics.active}
            testId="metric-active"
          />
          <MetricCard 
            icon={UserCheck}
            label="Completed"
            value={mockSequenceMetrics.completed}
            testId="metric-completed"
          />
          <MetricCard 
            icon={Users}
            label="Total added"
            value={mockSequenceMetrics.totalAdded}
            testId="metric-total"
          />
          <MetricCard 
            icon={Mail}
            label="Open"
            value={mockSequenceMetrics.open}
            testId="metric-open"
          />
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <Card className="shadow-sm">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-slate-900 mb-4">Sequence Performance</h3>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Send className="h-16 w-16 text-slate-300 mb-2 mx-auto" />
              <p className="text-slate-500">Charts will appear here.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
