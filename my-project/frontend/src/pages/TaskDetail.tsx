import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { DefaultService } from '../api/services/DefaultService'
import { Task, UpdateTaskDto } from '../api/models/Task'

const TaskDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [task, setTask] = useState<Task | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editing, setEditing] = useState(false)
  const [formData, setFormData] = useState<UpdateTaskDto>({})

  useEffect(() => {
    // タスク詳細を取得する処理（実装例）
    const fetchTask = async () => {
      if (!id) return
      
      try {
        setLoading(true)
        // APIからタスク詳細を取得する処理を実装
        // 仮のコメントアウト例: const data = await DefaultService.getTaskById(id)
        // setTask(data)
        // setFormData({
        //   title: data.title,
        //   description: data.description,
        //   completed: data.completed
        // })
      } catch (err) {
        console.error('タスクの取得に失敗しました', err)
        setError('タスクの読み込み中にエラーが発生しました。')
      } finally {
        setLoading(false)
      }
    }

    fetchTask()
  }, [id])

  // フォーム入力変更のハンドラー
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' 
      ? (e.target as HTMLInputElement).checked 
      : value
    
    setFormData({
      ...formData,
      [name]: newValue
    })
  }

  // 更新処理のハンドラー
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    // タスク更新処理の実装例
  }

  // 削除処理のハンドラー
  const handleDelete = async () => {
    // タスク削除処理の実装例
  }

  if (loading) {
    return <div>読み込み中...</div>
  }

  if (error || !task) {
    return <div className="error-message">{error || 'タスクが見つかりません'}</div>
  }

  return (
    <div>
      <div className="detail-header">
        <Link to="/" className="back-link">← タスク一覧に戻る</Link>
        <h2>{editing ? 'タスクを編集' : 'タスク詳細'}</h2>
      </div>

      {editing ? (
        <form onSubmit={handleUpdate} className="task-form">
          {/* 編集フォームの実装例 */}
          <div className="button-group">
            <button type="submit">更新する</button>
            <button type="button" onClick={() => setEditing(false)}>キャンセル</button>
          </div>
        </form>
      ) : (
        <div className="task-detail">
          {/* 詳細表示の実装例 */}
          <div className="button-group">
            <button onClick={() => setEditing(true)}>編集</button>
            <button onClick={handleDelete} className="delete-button">削除</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default TaskDetail 