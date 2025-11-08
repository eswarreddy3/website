export interface Student {
  name: string;
  workshop: string;
  uniqueCode: string;
  issuedBy: string;
}

export const students: Student[] = [
  {
    name: "Rahul Kumar",
    workshop: "Python Workshop",
    uniqueCode: "FYN001",
    issuedBy: "Fynity Innovations LLP",
  },
  {
    name: "Priya Sharma",
    workshop: "AI Tools Training",
    uniqueCode: "FYN002",
    issuedBy: "Fynity Innovations LLP",
  },
  // Add more students here...
];
