"use client"

import { useState } from "react"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { ArticlesTable } from "@/components/articles-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChatWidget } from "@/components/chat-widget"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("generated")

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6">Articles</h1>

          <div className="flex mb-6 space-x-2">
            <Button
              variant={activeTab === "generated" ? "default" : "outline"}
              className={activeTab === "generated" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
              onClick={() => setActiveTab("generated")}
            >
              Generated Articles
            </Button>
            <Button
              variant={activeTab === "published" ? "default" : "outline"}
              className={activeTab === "published" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
              onClick={() => setActiveTab("published")}
            >
              Published Articles
            </Button>
            <Button
              variant={activeTab === "scheduled" ? "default" : "outline"}
              className={activeTab === "scheduled" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
              onClick={() => setActiveTab("scheduled")}
            >
              Scheduled Articles
            </Button>
            <Button
              variant={activeTab === "archived" ? "default" : "outline"}
              className={activeTab === "archived" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
              onClick={() => setActiveTab("archived")}
            >
              Archived Articles
            </Button>
          </div>

          <div className="mb-6">
            <Input placeholder="Search for Title & Keywords..." className="max-w-md" />
          </div>

          <ArticlesTable />

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Total 9 Article Titles | Show:</span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              <span className="text-sm text-gray-500">entries per page</span>
            </div>

            <div className="flex items-center space-x-1">
              <Button variant="outline" size="sm" disabled>
                1
              </Button>
              <span>/</span>
              <Button variant="outline" size="sm">
                1
              </Button>
            </div>
          </div>
        </div>
      </main>
      <ChatWidget />
    </div>
  )
}
