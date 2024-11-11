'use client'

import React, { useState } from 'react'
import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Checkbox } from "../components/ui/Checkbox"
import { Label } from "../components/ui/Label"
import DraftSection from './DraftSection'

const users = [
  { id: "user1", name: "User 1" },
  { id: "user2", name: "User 2" },
  { id: "user3", name: "User 3" },
  { id: "user4", name: "User 4" },
  { id: "user5", name: "User 5" },
]

export default function SetUpTeam() {
  const [selectedUsers, setSelectedUsers] = useState([])
  const [showDraftSection, setShowDraftSection] = useState(false)

  const handleUserToggle = (userId) => {
    setSelectedUsers(prev =>
      prev.includes(userId) ? prev.filter(id => id !== userId) : [...prev, userId]
    )
  }

  const handleAddUsers = () => {
    if (selectedUsers.length > 0) {
      console.log('Adding users:', selectedUsers)
      setShowDraftSection(true)
    }
  }

  if (showDraftSection) {
    return <DraftSection onBack={() => setShowDraftSection(false)} />
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Set Up Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border rounded-md p-4">
            <div className="text-sm font-medium mb-2">Select Users:</div>
            {users.map((user) => (
              <div key={user.id} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={user.id}
                  checked={selectedUsers.includes(user.id)}
                  onCheckedChange={() => handleUserToggle(user.id)}
                />
                <Label
                  htmlFor={user.id}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {user.name}
                </Label>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedUsers.map((userId) => {
              const user = users.find(u => u.id === userId)
              return user ? (
                <div key={userId} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                  {user.name}
                  <button 
                    onClick={() => handleUserToggle(userId)} 
                    className="ml-1 text-primary hover:text-primary/70"
                    aria-label={`Remove ${user.name}`}
                  >
                    ×
                  </button>
                </div>
              ) : null
            })}
          </div>
          <Button onClick={handleAddUsers} className="w-full" disabled={selectedUsers.length === 0}>
            Add Users ({selectedUsers.length})
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}