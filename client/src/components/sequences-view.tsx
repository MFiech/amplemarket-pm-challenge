import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Bot, ArrowUpDown, Filter, ChevronRight } from "lucide-react";
import { mockContacts } from "@/lib/mock-data";

export default function SequencesView() {
  const [sortBy, setSortBy] = useState("date-added");
  const [filterBy, setFilterBy] = useState("recently-added");

  const getEngagementColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'text-blue-600',
      orange: 'text-orange-600',
      yellow: 'text-yellow-600',
      purple: 'text-purple-600',
      green: 'text-green-600'
    };
    return colors[color] || 'text-blue-600';
  };

  const ContactItem = ({ contact }: { contact: typeof mockContacts[0] }) => (
    <div 
      className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors"
      data-testid={`contact-${contact.id}`}
    >
      <div className="flex items-center space-x-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={contact.avatar} alt={`${contact.name} profile`} />
          <AvatarFallback>{contact.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-medium text-slate-900" data-testid={`text-contact-name-${contact.id}`}>
            {contact.name}
          </h4>
          <p className="text-sm text-slate-500" data-testid={`text-contact-title-${contact.id}`}>
            {contact.title}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <span className={`flex items-center text-sm ${getEngagementColor(contact.engagement.color)}`}>
          <div className={`w-2 h-2 rounded-full mr-2 bg-current`}></div>
          {contact.engagement.description}
        </span>
        <ChevronRight className="h-4 w-4 text-slate-400" />
      </div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Duo Copilot</h1>
          <div className="flex items-center space-x-4 mt-2">
            <span className="flex items-center text-sm text-slate-600">
              <Clock className="mr-1 h-4 w-4" />
              Pending actions 
              <Badge variant="secondary" className="ml-1">7</Badge>
            </span>
            <span className="flex items-center text-sm text-slate-600">
              <Bot className="mr-1 h-4 w-4" />
              On autopilot 
              <Badge variant="secondary" className="ml-1">22</Badge>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" data-testid="button-sort">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            Sort by: Date added
          </Button>
          <Button variant="outline" size="sm" data-testid="button-filters">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-6">
        <Select value={filterBy} onValueChange={setFilterBy}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recently-added">Recently added</SelectItem>
            <SelectItem value="last-contacted">Last contacted</SelectItem>
            <SelectItem value="most-engaged">Most engaged</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Contact List */}
      <Card className="shadow-sm mb-8">
        <CardContent className="p-0">
          {mockContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </CardContent>
      </Card>

      {/* Bottom Action Area */}
      <div className="text-center">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">👋</div>
            <p className="text-slate-600 mb-4">15 new leads are ready.</p>
            <p className="text-slate-600 mb-6">Pick one to start!</p>
            <Button className="bg-brand-600 text-white px-6 py-3 hover:bg-brand-700" data-testid="button-start-engaging">
              Start Engaging
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
