export interface DailyValue {
    date: string; // formato: "2025-05-10"
    valuePerBox: number;
  }
  
  export interface HarvestEntry {
    date: string;
    workerName: string;
    boxes: number;
    total: number;
  }
  