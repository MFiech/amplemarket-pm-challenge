import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Watch, UserCheck, Users, Mail } from "lucide-react";
import { mockSequenceMetrics } from "@/data/mock-data";

export default function SequenceOverview() {
  const [activeTab, setActiveTab] = useState("overview");
  const metrics = mockSequenceMetrics;

  const TabButton = ({ tab, children }: { tab: string; children: React.ReactNode }) => (
    <Button
      variant="ghost"
      className={`py-2 text-sm font-medium border-b-2 rounded-none ${
        activeTab === tab
          ? "text-brand-600 border-brand-600"
          : "text-slate-500 border-transparent hover:text-slate-700"
      }`}
      onClick={() => setActiveTab(tab)}
      data-testid={`tab-${tab}`}
    >
      {children}
    </Button>
  );

  const MetricCard = ({ 
    icon: Icon, 
    label, 
    value, 
    testId 
  }: { 
    icon: React.ComponentType<any>; 
    label: string; 
    value: number;
    testId: string;
  }) => (
    <Card className="shadow-sm" data-testid={testId}>
      <CardContent className="p-6">
        <div className="flex items-center mb-2">
          <Icon className="text-slate-400 mr-2 h-4 w-4" />
          <span className="text-sm font-medium text-slate-600">{label}</span>
        </div>
        <div className="text-2xl font-bold text-slate-900">{value.toLocaleString()}</div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6" data-testid="sequence-overview">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-slate-500 mb-6">
        <Send className="text-brand-600 h-4 w-4" />
        <span>Sequences</span>
        <span>›</span>
        <span className="text-slate-900 font-medium">20k leads sequence</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
          Live
        </span>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="flex space-x-8">
          <TabButton tab="overview">Overview</TabButton>
          <TabButton tab="contacted">Contacted Leads</TabButton>
          <TabButton tab="remaining">Remaining Leads</TabButton>
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
            value={metrics.active}
            testId="metric-active"
          />
          <MetricCard 
            icon={UserCheck} 
            label="Completed" 
            value={metrics.completed}
            testId="metric-completed"
          />
          <MetricCard 
            icon={Users} 
            label="Total added" 
            value={metrics.totalAdded}
            testId="metric-total-added"
          />
          <MetricCard 
            icon={Mail} 
            label="Open" 
            value={metrics.open}
            testId="metric-open"
          />
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <Card className="shadow-sm" data-testid="performance-chart">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-slate-900 mb-4">Sequence Performance</h3>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl text-slate-300 mb-2">📊</div>
              <p className="text-slate-500">Performance chart would be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
