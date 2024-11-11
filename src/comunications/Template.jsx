import React from 'react';
import { Button } from "../components/ui/Button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/TableComponents";
import { FileText, Users, Plus } from "lucide-react";

export default function Template({ onSwitch }) {
  const templates = [
    { no: 1, templateName: "Draft1", category: "RSVP", type: "Text" },
    { no: 2, templateName: "Lunch-2", category: "Itinerary", type: "Document" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end gap-2 mb-4">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={onSwitch} // Toggle back to DraftSection view
        >
          <FileText className="h-4 w-4" />
          Draft
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
            {templates.map((template) => (
              <TableRow key={template.no}>
                <TableCell>{template.no}</TableCell>
                <TableCell>{template.templateName}</TableCell>
                <TableCell>{template.category}</TableCell>
                <TableCell>{template.type}</TableCell>
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
