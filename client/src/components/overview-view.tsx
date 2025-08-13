import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Watch, UserCheck, Users, Mail } from "lucide-react";
import WireframePlaceholder from "@/components/wireframe-placeholder";

interface OverviewViewProps {
  mode?: "empty" | "prefilled-v1" | "prefilled-v2";
}

export default function OverviewView({ mode = "empty" }: OverviewViewProps) {

  const MetricCard = ({ 
    icon: Icon, 
    label, 
    testId 
  }: { 
    icon: any; 
    label: string; 
    testId: string;
  }) => (
    <Card className="shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center mb-2">
          <Icon className="text-slate-400 mr-2 h-4 w-4" />
          <span className="text-sm font-medium text-slate-600">{label}</span>
        </div>
        <div className="h-8 w-20 bg-slate-200 rounded" data-testid={testId}>
        </div>
      </CardContent>
    </Card>
  );



  const isPrefilled = mode === "prefilled-v1" || mode === "prefilled-v2";

  if (!isPrefilled) {
    return <WireframePlaceholder title="Overview" />;
  }

  return (
    <div className="p-6">

      {/* Overview */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-slate-900 mb-6">Overview</h2>
        
        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-6">
          <MetricCard 
            icon={Watch}
            label="Metric 1"
            testId="metric-1"
          />
          <MetricCard 
            icon={UserCheck}
            label="Metric 2"
            testId="metric-2"
          />
          <MetricCard 
            icon={Users}
            label="Metric 3"
            testId="metric-3"
          />
          <MetricCard 
            icon={Mail}
            label="Metric 4"
            testId="metric-4"
          />
        </div>
      </div>

      {/* Analytics Chart */}
      <Card className="shadow-sm mb-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-slate-900 mb-4">Analytics</h3>
          <div className="h-64 bg-slate-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Send className="h-16 w-16 text-slate-300 mb-2 mx-auto" />
              <p className="text-slate-500">Charts will appear here.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CI Feature Promotional Box */}
      <Card className="shadow-sm bg-gradient-to-r from-slate-50 to-gray-50 border-slate-200">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Image Column */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="h-32 bg-gradient-to-br from-slate-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-slate-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-xs text-slate-600">Competitive Intelligence</p>
                </div>
              </div>
            </div>
            
            {/* Text and CTA Column */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Unlock Competitive Intelligence</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                Discover prospects already evaluating your competitors. Our AI analyzes digital footprints, LinkedIn engagement, and event attendance to identify warm leads in your competitors' sales funnels.
              </p>
              <div className="flex items-center space-x-3">
                <Button className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2">
                  Upgrade to CI
                </Button>
                <Button variant="outline" className="text-slate-600 border-slate-600 hover:bg-slate-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
