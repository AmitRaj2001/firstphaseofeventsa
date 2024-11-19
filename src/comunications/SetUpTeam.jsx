import { Button } from "../components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card"
import { Label } from "../components/ui/Label"
import { Checkbox } from "../components/ui/Checkbox"
import DraftSection from './DraftSection'
import React, { useState, useRef, useEffect } from 'react'
import { ChevronUp, ChevronDown, X } from 'lucide-react'


const users = [
  { id: "user1", name: "User 1" },
  { id: "user2", name: "User 2" },
  { id: "user3", name: "User 3" },
  { id: "user4", name: "User 4" },
  { id: "user5", name: "User 5" },
  { id: "user6", name: "User 6" },
  { id: "user7", name: "User 7" },
  { id: "user8", name: "User 8" },
]

export default function SetUpTeam() {
  const [selectedUsers, setSelectedUsers] = useState([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [showDraftSection, setShowDraftSection] = useState(false)
  const dropdownRef = useRef(null)
  const triggerRef = useRef(null)

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (showDraftSection) {
    return <DraftSection onBack={() => setShowDraftSection(false)} />
  }

  return (
    <div className="w-full min-h-screen flex items-start justify-center p-4">
      <div className="w-full max-w-md relative">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Set Up Team</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="relative">
                <Button 
                  ref={triggerRef}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  variant="outline"
                  role="combobox"
                  aria-expanded={isDropdownOpen}
                  className="w-full flex justify-between items-center"
                >
                  <span className={`flex-1 text-left ${selectedUsers.length === 0 ? "text-muted-foreground" : ""}`}>
                    {selectedUsers.length > 0 
                      ? `${selectedUsers.length} user(s) selected` 
                      : "Select users"}
                  </span>
                  <span className="flex-shrink-0 ml-auto">
                    {isDropdownOpen ? (
                      <ChevronUp className="h-4 w-4 opacity-50" />
                    ) : (
                      <ChevronDown className="h-4 w-4 opacity-50" />
                    )}
                  </span>
                </Button>
                {isDropdownOpen && (
                  <div 
                    ref={dropdownRef}
                    className="absolute left-0 right-0 top-full mt-2 rounded-md border bg-white shadow-md z-50"
                    style={{ maxHeight: '300px', overflowY: 'auto' }}
                  >
                    <div className="p-2">
                      {users.map((user) => (
                        <div
                          key={user.id}
                          className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        >
                          <Checkbox
                            id={user.id}
                            checked={selectedUsers.includes(user.id)}
                            onCheckedChange={() => handleUserToggle(user.id)}
                            className="mr-2"
                          />
                          <Label htmlFor={user.id}>{user.name}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedUsers.map((userId) => {
                  const user = users.find(u => u.id === userId)
                  return user ? (
                    <div
                      key={userId}
                      className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-gray-100"
                    >
                      {user.name}
                      <button
                        onClick={() => handleUserToggle(userId)}
                        className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {user.name}</span>
                      </button>
                    </div>
                  ) : null
                })}
              </div>

              <Button 
                onClick={handleAddUsers}
                className="w-full"
                disabled={selectedUsers.length === 0}
              >
                Add Users ({selectedUsers.length})
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
