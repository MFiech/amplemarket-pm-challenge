import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Bot, ArrowUpDown, Filter, ChevronRight, CheckCircle2, AlertCircle, Calendar, Mail, Phone, MessageSquare, Users, Lightbulb, AlertTriangle } from "lucide-react";
import WireframePlaceholder from "@/components/wireframe-placeholder";

interface Task {
  id: number;
  type: "follow_up" | "review" | "update" | "action" | "urgent";
  title: string;
  description: string;
  priority: "high" | "medium" | "low";
  dueDate: string;
  contactName?: string;
  companyName?: string;
  avatar?: string;
}

const mockTasks: Task[] = [
  {
    id: 1,
    type: "follow_up",
    title: "Follow up with Michael Lupo",
    description: "Hasn't responded to last email about demo scheduling",
    priority: "high",
    dueDate: "Today",
    contactName: "Michael Lupo",
    companyName: "Ceros",
    avatar: "ML"
  },
  {
    id: 2,
    type: "urgent",
    title: "Review response from Jamie T",
    description: "Expressed interest in pricing, needs immediate attention",
    priority: "high", 
    dueDate: "Overdue",
    contactName: "Jamie T",
    companyName: "Evanta",
    avatar: "JT"
  },
  {
    id: 3,
    type: "review",
    title: "Review 23 prospects that interacted with your competitors",
    description: "New high-intent prospects engaged with Google, Apple, and HubSpot. Prioritize outreach.",
    priority: "high",
    dueDate: "Today",
    companyName: "Competitive Intelligence",
    avatar: "CI"
  },
  {
    id: 4,
    type: "follow_up",
    title: "Schedule call with Lyndsey Weinberg",
    description: "Requested product demo after initial outreach",
    priority: "medium",
    dueDate: "This week",
    contactName: "Lyndsey Weinberg", 
    companyName: "JumpCrew",
    avatar: "LW"
  },
  {
    id: 5,
    type: "review",
    title: "Analyze competitor mentions at Aprimo",
    description: "Recent social activity indicates evaluation of alternatives",
    priority: "medium",
    dueDate: "This week",
    companyName: "Aprimo"
  },
  {
    id: 6,
    type: "update",
    title: "Refresh contact info for Vasion leads",
    description: "Multiple bounced emails detected in recent sequences",
    priority: "low",
    dueDate: "Next week",
    companyName: "Vasion"
  },
  {
    id: 7,
    type: "urgent",
    title: "Churn risk among one of your customers (ACME)",
    description: "ACME engaged with Apple multiple times this week. Contact John Doe to protect the deal.",
    priority: "high",
    dueDate: "Today",
    companyName: "ACME",
    contactName: "John Doe"
  },
  {
    id: 8,
    type: "action",
    title: "Create custom sequence for Ceros prospects",
    description: "Industry-specific messaging could improve response rates",
    priority: "low",
    dueDate: "Next week",
    companyName: "Ceros"
  },
  {
    id: 9,
    type: "review",
    title: "Investigate warm leads at Vasion",
    description: "Website tracking shows increased activity from this account",
    priority: "medium",
    dueDate: "Tomorrow",
    companyName: "Vasion"
  },
  {
    id: 10,
    type: "urgent",
    title: "Respond to Kevin Kiernan's inquiry",
    description: "Asked specific questions about integration capabilities",
    priority: "high",
    dueDate: "Today",
    contactName: "Kevin Kiernan",
    companyName: "Vasion",
    avatar: "KK"
  }
];

interface DuoCopilotViewProps {
  mode?: "empty" | "prefilled-v1" | "prefilled-v2";
}

export default function DuoCopilotView({ mode = "empty" }: DuoCopilotViewProps) {
  const [sortBy, setSortBy] = useState("priority");
  const [filterBy, setFilterBy] = useState("all-tasks");

  const getTaskIcon = (type: Task["type"]) => {
    switch (type) {
      case "follow_up":
        return <Mail className="h-4 w-4" />;
      case "review": 
        return <CheckCircle2 className="h-4 w-4" />;
      case "update":
        return <Users className="h-4 w-4" />;
      case "action":
        return <MessageSquare className="h-4 w-4" />;
      case "urgent":
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-orange-600 bg-orange-50";
      case "low":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getDueDateColor = (dueDate: string) => {
    if (dueDate === "Overdue") return "text-red-600";
    if (dueDate === "Today") return "text-orange-600";
    return "text-gray-600";
  };

  const TaskItem = ({ task }: { task: Task }) => {
    // Special case for competitive intelligence task
    if (task.id === 3) {
      return (
        <div 
          className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
          data-testid={`task-${task.id}`}
        >
          <div className="flex items-center space-x-4 w-3/4">
            <input type="checkbox" className="h-4 w-4 text-gray-600 flex-shrink-0" />
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-4 w-4" />
            </div>
            <div className="space-y-2 flex-1 min-w-0">
              <h4 className="font-medium text-gray-900">{task.title}</h4>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>
          </div>
          
          <div className="flex items-center w-1/4 justify-end">
            <div className="rounded-full bg-gray-300 px-3 py-1 flex items-center min-h-[24px]">
              <span className="text-xs font-medium text-gray-700 whitespace-nowrap">New high-intent leads available</span>
            </div>
          </div>
        </div>
      );
    }

    // Special case for churn risk task
    if (task.id === 7) {
      return (
        <div 
          className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
          data-testid={`task-${task.id}`}
        >
          <div className="flex items-center space-x-4 w-3/4">
            <input type="checkbox" className="h-4 w-4 text-gray-600 flex-shrink-0" />
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div className="space-y-2 flex-1 min-w-0">
              <h4 className="font-medium text-gray-900">{task.title}</h4>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>
          </div>
          
          <div className="flex items-center w-1/4 justify-end">
            <div className="rounded-full bg-gray-300 px-3 py-1 flex items-center min-h-[24px]">
              <span className="text-xs font-medium text-gray-700 whitespace-nowrap">Potential churn alert</span>
            </div>
          </div>
        </div>
      );
    }

    // Default wireframe layout for other tasks
    return (
      <div 
        className="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
        data-testid={`task-${task.id}`}
      >
        <div className="flex items-center space-x-4">
          <input type="checkbox" className="h-4 w-4 text-gray-600" />
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
            {getTaskIcon(task.type)}
          </div>
          <div className="space-y-2">
            <div className="h-4 rounded bg-gray-400 w-56"></div>
            <div className="h-3 rounded bg-gray-300 w-40"></div>
            <div className="h-3 rounded bg-gray-300 w-32"></div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="h-6 rounded-full bg-gray-300 w-48"></div>
        </div>
      </div>
    );
  };

  const isPrefilled = mode === "prefilled-v1" || mode === "prefilled-v2";

  if (!isPrefilled) {
    return <WireframePlaceholder title="Duo Copilot" />;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Duo Copilot</h1>
      </div>

      {/* Tasks List */}
      <Card className="shadow-sm">
        <CardContent className="p-0">
          {mockTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
