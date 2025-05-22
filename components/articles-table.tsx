"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const articles = [
  {
    id: 1,
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    createdOn: "20 hours ago",
  },
  {
    id: 2,
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    createdOn: "21 hours ago",
  },
  {
    id: 3,
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    createdOn: "a day ago",
  },
  {
    id: 4,
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    createdOn: "1 Oct, 24",
  },
  {
    id: 5,
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    createdOn: "—",
  },
  {
    id: 6,
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    createdOn: "—",
  },
  {
    id: 7,
    title: "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [5100]",
    words: 2261,
    createdOn: "—",
  },
  {
    id: 8,
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    words: 1543,
    createdOn: "—",
  },
  {
    id: 9,
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    createdOn: "—",
  },
]

export function ArticlesTable() {
  const [selectedArticles, setSelectedArticles] = useState<number[]>([])
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")

  const toggleSelectAll = () => {
    if (selectedArticles.length === articles.length) {
      setSelectedArticles([])
    } else {
      setSelectedArticles(articles.map((article) => article.id))
    }
  }

  const toggleSelectArticle = (id: number) => {
    if (selectedArticles.includes(id)) {
      setSelectedArticles(selectedArticles.filter((articleId) => articleId !== id))
    } else {
      setSelectedArticles([...selectedArticles, id])
    }
  }

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const sortedArticles = [...articles].sort((a, b) => {
    if (!sortColumn) return 0

    let valueA, valueB

    switch (sortColumn) {
      case "title":
        valueA = a.title
        valueB = b.title
        break
      case "keyword":
        valueA = a.keyword
        valueB = b.keyword
        break
      case "words":
        valueA = a.words
        valueB = b.words
        break
      case "createdOn":
        valueA = a.createdOn
        valueB = b.createdOn
        break
      default:
        return 0
    }

    if (valueA < valueB) return sortDirection === "asc" ? -1 : 1
    if (valueA > valueB) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-3 pr-4 font-normal">
              <Checkbox
                checked={selectedArticles.length === articles.length && articles.length > 0}
                onCheckedChange={toggleSelectAll}
              />
            </th>
            <th className="pb-3 pr-4 font-medium text-gray-700 cursor-pointer" onClick={() => handleSort("title")}>
              <div className="flex items-center">
                Article Title
                <svg className="ml-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-3 pr-4 font-medium text-gray-700 cursor-pointer" onClick={() => handleSort("keyword")}>
              <div className="flex items-center">
                Keyword [Traffic]
                <svg className="ml-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-3 pr-4 font-medium text-gray-700 cursor-pointer" onClick={() => handleSort("words")}>
              <div className="flex items-center">
                Words
                <svg className="ml-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-3 pr-4 font-medium text-gray-700 cursor-pointer" onClick={() => handleSort("createdOn")}>
              <div className="flex items-center">
                Created On
                <svg className="ml-1 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-3 pr-4 font-medium text-gray-700">Action</th>
            <th className="pb-3 pr-4 font-medium text-gray-700">Publish</th>
          </tr>
        </thead>
        <tbody>
          {sortedArticles.map((article) => (
            <tr key={article.id} className="border-b hover:bg-gray-50">
              <td className="py-3 pr-4">
                <Checkbox
                  checked={selectedArticles.includes(article.id)}
                  onCheckedChange={() => toggleSelectArticle(article.id)}
                />
              </td>
              <td className="py-3 pr-4">{article.title}</td>
              <td className="py-3 pr-4">{article.keyword}</td>
              <td className="py-3 pr-4">{article.words}</td>
              <td className="py-3 pr-4">{article.createdOn}</td>
              <td className="py-3 pr-4">
                <Button variant="outline" size="sm" className="text-blue-500 border-blue-500 hover:bg-blue-50">
                  View
                </Button>
              </td>
              <td className="py-3 pr-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                    W
                  </div>
                  <div className="h-4 w-[1px] bg-gray-300"></div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
