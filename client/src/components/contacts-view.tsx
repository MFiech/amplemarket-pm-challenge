import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Plus, Mail, Phone, MoreHorizontal } from "lucide-react";
import { mockContactsTable } from "@/data/mock-data";

export default function ContactsView() {
  return (
    <div className="p-6" data-testid="contacts-view">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Contacts</h1>
        <p className="text-slate-600">Manage contacts and engagement history.</p>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input 
              type="text" 
              placeholder="Search contacts..." 
              className="pl-10 pr-4 py-2 w-64"
              data-testid="search-contacts"
            />
          </div>
          <select className="px-3 py-2 border border-slate-300 rounded-lg bg-white" data-testid="filter-contacts">
            <option>All contacts</option>
            <option>Active sequences</option>
            <option>Replied</option>
            <option>Cold</option>
          </select>
        </div>
        <Button className="bg-brand-600 hover:bg-brand-700" data-testid="add-contact">
          <Plus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      {/* Contacts Table */}
      <Card className="shadow-sm overflow-hidden" data-testid="contacts-table">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="grid grid-cols-5 gap-4 text-sm font-medium text-slate-600">
            <span>Contact</span>
            <span>Company</span>
            <span>Status</span>
            <span>Last Activity</span>
            <span>Actions</span>
          </div>
        </div>
        <CardContent className="p-0">
          <div className="divide-y divide-slate-200">
            {mockContactsTable.map((contact) => (
              <div 
                key={contact.id} 
                className="px-6 py-4 grid grid-cols-5 gap-4 items-center hover:bg-slate-50"
                data-testid={`contact-row-${contact.id}`}
              >
                <div className="flex items-center space-x-3">
                  <img 
                    src={contact.avatar} 
                    alt={`${contact.name} profile`} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-slate-900">{contact.name}</div>
                    <div className="text-sm text-slate-500">{contact.email}</div>
                  </div>
                </div>
                <span className="text-slate-900">{contact.company}</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  contact.status === "Active" 
                    ? "bg-green-100 text-green-800" 
                    : "bg-gray-100 text-gray-800"
                }`}>
                  {contact.status}
                </span>
                <span className="text-sm text-slate-500">{contact.lastActivity}</span>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" data-testid={`email-${contact.id}`}>
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" data-testid={`call-${contact.id}`}>
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" data-testid={`more-${contact.id}`}>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
