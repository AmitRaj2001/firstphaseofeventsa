import React, { useState } from 'react';
import { Button } from "../components/ui/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/TableComponents";
import { FileText, Users, Plus } from "lucide-react";
import Template from './Template';

export default function DraftSection() {
  const [showTemplate, setShowTemplate] = useState(true); // Initially set to true to show Template first

  const drafts = [
    { no: 1, templateName: "RSVP wedding", category: "RSVP", type: "Text" },
    { no: 2, templateName: "Lunch-2", category: "Itinerary", type: "Document" },
  ];

  if (showTemplate) {
    return <Template onSwitch={() => setShowTemplate(false)} />;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end gap-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setShowTemplate(true)}
        >
          <FileText className="h-4 w-4" />
          Template
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Team
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">No.</TableHead>
              <TableHead>Template Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="w-24">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {drafts.map((draft) => (
              <TableRow key={draft.no}>
                <TableCell>{draft.no}</TableCell>
                <TableCell>{draft.templateName}</TableCell>
                <TableCell>{draft.category}</TableCell>
                <TableCell>{draft.type}</TableCell>
                <TableCell>
                  <Button variant="link" size="sm">
                    Select
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-start">
        <Button variant="outline" size="icon">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Add</span>
        </Button>
      </div>
    </div>
  );
}
