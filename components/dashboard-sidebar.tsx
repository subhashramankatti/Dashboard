"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  ChevronRight,
  FileText,
  BarChart2,
  Link2,
  BookOpen,
  Grid,
  Settings,
  Users,
  HelpCircle,
  Zap,
  MessageSquare,
  User,
} from "lucide-react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(["articles"])

  const toggleExpand = (item: string) => {
    if (expandedItems.includes(item)) {
      setExpandedItems(expandedItems.filter((i) => i !== item))
    } else {
      setExpandedItems([...expandedItems, item])
    }
  }

  return (
    <div className="w-64 bg-white border-r h-screen overflow-y-auto flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">abun</h1>

        <div className="mb-4 flex items-center rounded-full border p-1 pl-2">
          <div className="mr-2 h-4 w-4 rounded-full bg-pink-500"></div>
          <span className="text-sm">amazon.com</span>
          <ChevronDown className="ml-auto h-4 w-4" />
        </div>

        <nav className="space-y-1">
          {/* Articles */}
          <div>
            <button
              onClick={() => toggleExpand("articles")}
              className="flex items-center w-full rounded-md px-3 py-2 text-sm text-left"
            >
              <FileText className="mr-2 h-4 w-4 text-blue-500" />
              <span className="text-blue-500 font-medium">Articles</span>
              {expandedItems.includes("articles") ? (
                <ChevronDown className="ml-auto h-4 w-4 text-blue-500" />
              ) : (
                <ChevronRight className="ml-auto h-4 w-4 text-blue-500" />
              )}
            </button>

            {expandedItems.includes("articles") && (
              <div className="ml-6 mt-1 space-y-1">
                <Link
                  href="/create-article"
                  className="block rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Create Article
                </Link>
                <Link href="/" className="block rounded-md px-3 py-1 text-sm text-blue-600">
                  Generated Articles
                </Link>
                <Link
                  href="/keyword-projects"
                  className="block rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Keyword Projects
                </Link>
                <Link
                  href="/ai-keyword-to-article"
                  className="block rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  AI Keyword to Article
                </Link>
                <Link
                  href="/steal-competitor-keyword"
                  className="block rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Steal Competitor Keyword
                </Link>
                <Link
                  href="/import-keyword-from-gsc"
                  className="block rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Import Keyword from GSC
                </Link>
                <Link
                  href="/manual-keyword-to-article"
                  className="block rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Manual Keyword to Article
                </Link>
                <Link
                  href="/bulk-keyword-to-article"
                  className="block rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Bulk Keyword to Article
                </Link>
                <Link
                  href="/longtail-keyword-to-article"
                  className="block rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Longtail Keyword to Article
                </Link>
                <Link
                  href="/article-settings"
                  className="block rounded-md px-3 py-1 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Article Settings
                </Link>
              </div>
            )}
          </div>

          {/* Auto Blog */}
          <Link
            href="/auto-blog"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <BarChart2 className="mr-2 h-4 w-4" />
            <span>Auto Blog</span>
          </Link>

          {/* Internal Links */}
          <Link
            href="/internal-links"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Link2 className="mr-2 h-4 w-4" />
            <span>Internal Links</span>
          </Link>

          {/* Free Backlinks */}
          <Link
            href="/free-backlinks"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Free Backlinks</span>
          </Link>

          {/* Integrations */}
          <Link
            href="/integrations"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Grid className="mr-2 h-4 w-4" />
            <span>Integrations</span>
          </Link>

          {/* Subscription */}
          <Link
            href="/subscription"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Subscription</span>
          </Link>

          {/* Affiliate Program */}
          <Link
            href="/affiliate-program"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Users className="mr-2 h-4 w-4" />
            <span>Affiliate Program</span>
          </Link>

          {/* Help Center */}
          <Link
            href="/help-center"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Help Center</span>
          </Link>

          {/* Updates */}
          <Link
            href="/updates"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Zap className="mr-2 h-4 w-4" />
            <span>Updates</span>
          </Link>

          {/* Live Chat Support */}
          <Link
            href="/live-chat-support"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Live Chat Support</span>
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            className="flex items-center rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
