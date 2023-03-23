export interface TaskRes {
  id: string;
  title: string;
  description?: string;
  time?: Date;
  userId: string;
  complete: boolean;
}

export interface UserRes {
  id: string;
  userName: string;
  firstName: string;
  lastName?: string;
  email: string;
}