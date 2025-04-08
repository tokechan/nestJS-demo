import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DefaultService } from '../api/services/DefaultService'
import { Task } from '../api/models/Task'

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true)
        const data = await DefaultService.getAllTasks()
        setTasks(data)
        setError(null)
      } catch (err) {
        console.error('タスクの取得に失敗しました', err)
        setError('タスクの読み込み中にエラーが発生しました。後でもう一度お試しください。')
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  const handleCompleteTask = async (id: string, completed: boolean) => {
    try {
      await DefaultService.updateTask(id, { completed: !completed })
      // 成功したら状態を更新
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !completed } : task
      ))
    } catch (err) {
      console.error('タスクの更新に失敗しました', err)
      setError('タスクの更新中にエラーが発生しました。')
    }
  }

  const handleDeleteTask = async (id: string) => {
    if (window.confirm('このタスクを削除してもよろしいですか？')) {
      try {
        await DefaultService.deleteTask(id)
        // 成功したら一覧から削除
        setTasks(tasks.filter(task => task.id !== id))
      } catch (err) {
        console.error('タスクの削除に失敗しました', err)
        setError('タスクの削除中にエラーが発生しました。')
      }
    }
  }

  if (loading) {
    return <div>読み込み中...</div>
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  return (
    <div>
      <div className="list-header">
        <h2>タスク一覧</h2>
        <Link to="/create" className="button">新規タスク作成</Link>
      </div>

      {tasks.length === 0 ? (
        <p>タスクがありません。新しいタスクを作成してください。</p>
      ) : (
        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content">
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
                <p className="task-date">作成日: {new Date(task.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="task-actions">
                <button
                  onClick={() => handleCompleteTask(task.id, task.completed)}
                  className={`toggle-button ${task.completed ? 'completed' : ''}`}
                >
                  {task.completed ? '完了' : '未完了'}
                </button>
                <Link to={`/tasks/${task.id}`} className="button">詳細</Link>
                <button onClick={() => handleDeleteTask(task.id)} className="delete-button">削除</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TaskList 