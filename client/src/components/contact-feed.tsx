import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Bot, SortAsc, Filter, ChevronRight } from "lucide-react";
import { mockContacts } from "@/data/mock-data";

export default function ContactFeed() {
  return (
    <div className="p-6" data-testid="contact-feed">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Duo Copilot</h1>
          <div className="flex items-center space-x-4 mt-2">
            <span className="flex items-center text-sm text-slate-600">
              <Clock className="mr-1 h-4 w-4" />
              Pending actions 
              <span className="ml-1 bg-slate-100 px-2 py-1 rounded-full text-xs">7</span>
            </span>
            <span className="flex items-center text-sm text-slate-600">
              <Bot className="mr-1 h-4 w-4" />
              On autopilot 
              <span className="ml-1 bg-slate-100 px-2 py-1 rounded-full text-xs">22</span>
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" data-testid="sort-button">
            <SortAsc className="mr-2 h-4 w-4" />
            Sort by: Date added
          </Button>
          <Button variant="outline" size="sm" data-testid="filter-button">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="mb-6">
        <select className="px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white" data-testid="filter-select">
          <option>Recently added</option>
          <option>Last contacted</option>
          <option>Most engaged</option>
        </select>
      </div>

      {/* Contact List */}
      <Card className="shadow-sm" data-testid="contact-list">
        <CardContent className="p-0">
          {mockContacts.map((contact, index) => (
            <div 
              key={contact.id} 
              className={`flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer ${
                index < mockContacts.length - 1 ? 'border-b border-slate-100' : ''
              }`}
              data-testid={`contact-item-${contact.id}`}
            >
              <div className="flex items-center space-x-4">
                <img 
                  src={contact.avatar || ''} 
                  alt={`${contact.name} profile`} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-slate-900">{contact.name}</h4>
                  <p className="text-sm text-slate-500">{contact.title}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="flex items-center text-sm" style={{ color: contact.engagementColor || '#666' }}>
                  <div 
                    className="w-2 h-2 rounded-full mr-2" 
                    style={{ backgroundColor: contact.engagementColor || '#666' }}
                  ></div>
                  {contact.engagementType}
                </span>
                <ChevronRight className="text-slate-400 h-4 w-4" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Bottom Action Area */}
      <div className="mt-8 text-center">
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-sm" data-testid="action-area">
          <CardContent className="p-8">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">👋</div>
              <p className="text-slate-600 mb-4">15 new prospects are ready.</p>
              <p className="text-slate-600 mb-6">Select a prospect to begin.</p>
              <Button className="bg-brand-600 hover:bg-brand-700" data-testid="start-engaging">
                Start Engaging
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
