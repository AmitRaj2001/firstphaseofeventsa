import React, { useState } from 'react';
import { Button } from "../components/ui/Button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select"
import DraftSection from './DraftSection';


export default function SetUpTeam() {
  const [selectedUser, setSelectedUser] = useState('')
  const [showDraftSection, setShowDraftSection] = useState(false)

  const handleAddUser = () => {
    if (selectedUser) {
      console.log('Adding user:', selectedUser)
      setShowDraftSection(true)
    }
  }

  if (showDraftSection) {
    return <DraftSection onBack={() => setShowDraftSection(false)} />
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Set Up Team</h1>
      <div className="space-y-4">
        <Select onValueChange={setSelectedUser}>
          <SelectTrigger>
            <SelectValue placeholder="Select Users" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="user1">User 1</SelectItem>
            <SelectItem value="user2">User 2</SelectItem>
            <SelectItem value="user3">User 3</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleAddUser} className="w-full" disabled={!selectedUser}>
          Add
        </Button>
      </div>
    </div>
  )
}