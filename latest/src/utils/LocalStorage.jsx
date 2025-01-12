const employee = [
  {
    id: 1,
    name: "Tony",
    email: "tonystark@avenger.com",
    password: "123",
    tasks: [
      {
        title: "Complete Report",
        description: "Finish the quarterly report",
        date: "2024-11-07",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Prepare Budget",
        description: "Analyze and prepare the budget for next quarter",
        date: "2024-11-09",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    name: "Steve",
    email: "steverogers@avenger.com",
    password: "123",
    tasks: [
      {
        title: "Update Database",
        description: "Perform data migration for client",
        date: "2024-11-07",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Review Security Logs",
        description: "Audit server logs for anomalies",
        date: "2024-11-10",
        category: "Security",
        active: false,
        newTask: true,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    name: "Peter",
    email: "peterparker@avenger.com",
    password: "123",
    tasks: [
      {
        title: "Create Mockups",
        description: "Design mockups for the new landing page",
        date: "2024-11-06",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Resolve login issue on the website",
        date: "2024-11-07",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team Demo",
        description: "Present new feature to the team",
        date: "2024-11-08",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    name: "Bruce",
    email: "brucebanner@avenger.com",
    password: "123",
    tasks: [
      {
        title: "Customer Feedback Analysis",
        description: "Analyze customer feedback from surveys",
        date: "2024-11-05",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "New Feature Proposal",
        description: "Draft proposal for the new mobile app feature",
        date: "2024-11-10",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Backend Migration",
        description: "Migrate backend to a new framework",
        date: "2024-11-12",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    name: "Thor",
    email: "thor@avenger.com",
    password: "123",
    tasks: [
      {
        title: "Social Media Strategy",
        description: "Plan next month's social media posts",
        date: "2024-11-07",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Inventory List",
        description: "Verify and update stock quantities",
        date: "2024-11-08",
        category: "Inventory",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Supplier Coordination",
        description: "Coordinate with suppliers for delayed shipments",
        date: "2024-11-09",
        category: "Logistics",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  }
];



const admin = [
     {
    "id": 101,
    "name": "Marvel",
    "email": "marvel@avenger.com",
    "password": "123"
  }
]
export const setLocalStorage = () => {
 localStorage.setItem('employee', JSON.stringify(employee));
 localStorage.setItem('admin', JSON.stringify(admin));
} 
export const getLocalStorage = () => {
  const employee = JSON.parse(localStorage.getItem('employee') || "[]");
  const admin = JSON.parse(localStorage.getItem('admin') || "[]");
  return { employee, admin };
};
