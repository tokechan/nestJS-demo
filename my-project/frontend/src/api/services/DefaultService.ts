import OpenAPI from '../OpenAPI';
import { Task, CreateTaskDto, UpdateTaskDto } from '../models/Task';

/**
 * タスクAPIのサービスクラス
 */
export class DefaultService {
  /**
   * すべてのタスクを取得
   * @returns タスクの配列を含むPromise
   */
  public static async getAllTasks(): Promise<Task[]> {
    const response = await OpenAPI.axios.get<Task[]>('/tasks');
    return response.data;
  }

  /**
   * 指定したIDのタスクを取得
   * @param id タスクID
   * @returns タスクを含むPromise
   */
  public static async getTaskById(id: string): Promise<Task> {
    const response = await OpenAPI.axios.get<Task>(`/tasks/${id}`);
    return response.data;
  }

  /**
   * 新しいタスクを作成
   * @param createTaskDto タスク作成DTO
   * @returns 作成されたタスクを含むPromise
   */
  public static async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const response = await OpenAPI.axios.post<Task>('/tasks', createTaskDto);
    return response.data;
  }

  /**
   * タスクを更新
   * @param id タスクID
   * @param updateTaskDto タスク更新DTO
   * @returns 更新されたタスクを含むPromise
   */
  public static async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const response = await OpenAPI.axios.put<Task>(`/tasks/${id}`, updateTaskDto);
    return response.data;
  }

  /**
   * タスクを削除
   * @param id タスクID
   * @returns 空のPromise
   */
  public static async deleteTask(id: string): Promise<void> {
    await OpenAPI.axios.delete(`/tasks/${id}`);
  }
} 