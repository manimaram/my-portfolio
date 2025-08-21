export interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    title: "Dean's List",
    description: "Recognized for academic excellence with GPA above 3.8",
    year: "2023-2024",
    icon: "🏆"
  },
  {
    title: "Hackathon Winner",
    description: "First place in University Tech Innovation Challenge",
    year: "2024",
    icon: "💡"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to multiple GitHub projects with 100+ commits",
    year: "2023-2024",
    icon: "🔧"
  },
  {
    title: "Technical Blog Writer",
    description: "Published 15+ technical articles on modern web development",
    year: "2023-2024",
    icon: "✍️"
  },
  {
    title: "Student Leader",
    description: "Led Computer Science Student Association initiatives",
    year: "2023-2024",
    icon: "👥"
  },
  {
    title: "Scholarship Recipient",
    description: "Merit-based scholarship for outstanding academic performance",
    year: "2023",
    icon: "🎓"
  }
];