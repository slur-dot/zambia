"use client"

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react"

interface UserInfo {
  gender: string
  ageRange: string
  isDifferentlyAbled: boolean
  nrcNumber: string
  phoneNumber: string
  fullName: string
}

interface UserContextType {
  userInfo: UserInfo | null
  isAnonymous: boolean
  setUserInfo: (info: Partial<UserInfo>) => void
  setIsAnonymous: (isAnonymous: boolean) => void
  clearUserInfo: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSetUserInfo = (info: Partial<UserInfo>) => {
    if (!userInfo) {
      // Initialize with empty strings for required fields
      setUserInfo({
        gender: "",
        ageRange: "",
        isDifferentlyAbled: false,
        nrcNumber: "",
        phoneNumber: "",
        fullName: "",
        ...info
      })
    } else {
      setUserInfo({
        ...userInfo,
        ...info
      })
    }
  }

  const clearUserInfo = () => {
    setUserInfo(null)
    setIsAnonymous(false)
  }

  // Only render children when on client-side
  if (!isClient) {
    return null
  }

  return (
    <UserContext.Provider
      value={{
        userInfo,
        isAnonymous,
        setUserInfo: handleSetUserInfo,
        setIsAnonymous,
        clearUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
} 