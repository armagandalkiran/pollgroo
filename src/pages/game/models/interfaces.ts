export interface PollDataType {
  [key:string]: number;
}

export interface PollData {
  subject?: string;
  description?: string;
  type?: PollDataType[];
}
