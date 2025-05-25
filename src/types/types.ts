export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export type FilterType = "all" | "completed" | "active";
