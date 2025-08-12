import { Card, CardContent } from "@/components/ui/card";
import { Reply, MailOpen, Calendar } from "lucide-react";
import { mockAnalytics } from "@/data/mock-data";

export default function AnalyticsView() {
  const MetricCard = ({ 
    icon: Icon, 
    title, 
    value, 
    change, 
    isPositive,
    testId 
  }: { 
    icon: React.ComponentType<any>; 
    title: string; 
    value: string; 
    change: string;
    isPositive: boolean;
    testId: string;
  }) => (
    <Card className="shadow-sm" data-testid={testId}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-slate-900">{title}</h3>
          <Icon className="text-brand-600 h-5 w-5" />
        </div>
        <div className="text-3xl font-bold text-slate-900 mb-2">{value}</div>
        <div className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '↑' : '↓'} {change}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6" data-testid="analytics-view">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Analytics</h1>
        <p className="text-slate-600">Track your outreach performance and engagement metrics</p>
      </div>

      {/* Analytics Dashboard */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <MetricCard
          icon={Reply}
          title="Response Rate"
          value={mockAnalytics.responseRate}
          change={mockAnalytics.responseRateChange}
          isPositive={true}
          testId="metric-response-rate"
        />
        <MetricCard
          icon={MailOpen}
          title="Open Rate"
          value={mockAnalytics.openRate}
          change={mockAnalytics.openRateChange}
          isPositive={true}
          testId="metric-open-rate"
        />
        <MetricCard
          icon={Calendar}
          title="Meetings Booked"
          value={mockAnalytics.meetingsBooked}
          change={mockAnalytics.meetingsBookedChange}
          isPositive={false}
          testId="metric-meetings-booked"
        />
      </div>

      {/* Chart Area */}
      <Card className="shadow-sm" data-testid="analytics-chart">
        <CardContent className="p-6">
          <h3 className="text-lg font-medium text-slate-900 mb-4">Performance Over Time</h3>
          <div className="h-80 bg-slate-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl text-slate-300 mb-2">📈</div>
              <p className="text-slate-500">Interactive analytics chart would be displayed here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
