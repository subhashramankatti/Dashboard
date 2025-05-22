export type Customer = {
  id: string
  name: string
  email: string
  status: "active" | "inactive" | "pending"
  lastOrder: string
  totalSpent: number
}

export const data: Customer[] = [
  {
    id: "CUST-001",
    name: "John Smith",
    email: "john.smith@example.com",
    status: "active",
    lastOrder: "2023-04-15",
    totalSpent: 1245.89,
  },
  {
    id: "CUST-002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    status: "active",
    lastOrder: "2023-04-10",
    totalSpent: 892.5,
  },
  {
    id: "CUST-003",
    name: "Michael Brown",
    email: "michael.b@example.com",
    status: "inactive",
    lastOrder: "2023-03-22",
    totalSpent: 435.2,
  },
  {
    id: "CUST-004",
    name: "Emily Davis",
    email: "emily.d@example.com",
    status: "active",
    lastOrder: "2023-04-18",
    totalSpent: 1567.9,
  },
  {
    id: "CUST-005",
    name: "Robert Wilson",
    email: "robert.w@example.com",
    status: "pending",
    lastOrder: "2023-04-01",
    totalSpent: 289.3,
  },
  {
    id: "CUST-006",
    name: "Jennifer Taylor",
    email: "jennifer.t@example.com",
    status: "active",
    lastOrder: "2023-04-12",
    totalSpent: 978.6,
  },
  {
    id: "CUST-007",
    name: "David Martinez",
    email: "david.m@example.com",
    status: "inactive",
    lastOrder: "2023-03-15",
    totalSpent: 345.8,
  },
  {
    id: "CUST-008",
    name: "Lisa Anderson",
    email: "lisa.a@example.com",
    status: "active",
    lastOrder: "2023-04-17",
    totalSpent: 1123.4,
  },
  {
    id: "CUST-009",
    name: "James Thomas",
    email: "james.t@example.com",
    status: "pending",
    lastOrder: "2023-04-05",
    totalSpent: 156.7,
  },
  {
    id: "CUST-010",
    name: "Patricia White",
    email: "patricia.w@example.com",
    status: "active",
    lastOrder: "2023-04-14",
    totalSpent: 789.2,
  },
  {
    id: "CUST-011",
    name: "Richard Harris",
    email: "richard.h@example.com",
    status: "active",
    lastOrder: "2023-04-16",
    totalSpent: 678.9,
  },
  {
    id: "CUST-012",
    name: "Linda Clark",
    email: "linda.c@example.com",
    status: "inactive",
    lastOrder: "2023-03-28",
    totalSpent: 234.5,
  },
  {
    id: "CUST-013",
    name: "William Lewis",
    email: "william.l@example.com",
    status: "active",
    lastOrder: "2023-04-11",
    totalSpent: 876.3,
  },
  {
    id: "CUST-014",
    name: "Elizabeth Walker",
    email: "elizabeth.w@example.com",
    status: "pending",
    lastOrder: "2023-04-03",
    totalSpent: 198.6,
  },
  {
    id: "CUST-015",
    name: "Thomas Hall",
    email: "thomas.h@example.com",
    status: "active",
    lastOrder: "2023-04-13",
    totalSpent: 945.7,
  },
]
