/**
 * タスクエンティティの型定義
 */
export interface Task {
  /** タスクのユニークID */
  id: string;
  
  /** タスクのタイトル */
  title: string;
  
  /** タスクの詳細説明 (オプション) */
  description?: string;
  
  /** タスクの完了状態 */
  completed: boolean;
  
  /** タスクの作成日時 */
  createdAt: string;
}

/**
 * タスク作成用DTOの型定義
 */
export interface CreateTaskDto {
  /** タスクのタイトル */
  title: string;
  
  /** タスクの詳細説明 (オプション) */
  description?: string;
  
  /** タスクの完了状態 (デフォルトはfalse) */
  completed?: boolean;
}

/**
 * タスク更新用DTOの型定義
 */
export interface UpdateTaskDto {
  /** タスクのタイトル (オプション) */
  title?: string;
  
  /** タスクの詳細説明 (オプション) */
  description?: string;
  
  /** タスクの完了状態 (オプション) */
  completed?: boolean;
} 