import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DefaultService } from '../api/services/DefaultService'
import { CreateTaskDto } from '../api/models/Task'

const TaskCreate = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<CreateTaskDto>({
    title: '',
    description: '',
    completed: false
  })
  const [error, setError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      // 必須項目の検証
      if (!formData.title.trim()) {
        throw new Error('タイトルは必須です')
      }

      // タスク作成APIを呼び出し
      const newTask = await DefaultService.createTask(formData)
      console.log('タスクが作成されました:', newTask)
      
      // 一覧ページへリダイレクト
      navigate('/')
    } catch (err) {
      console.error('タスク作成に失敗しました:', err)
      setError(err instanceof Error ? err.message : 'タスクの作成中にエラーが発生しました')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div>
      <h2>新しいタスクを作成</h2>
      
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">タイトル *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">説明</label>
          <textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={handleChange}
            rows={4}
          />
        </div>
        
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="completed"
              checked={formData.completed || false}
              onChange={handleChange}
            />
            完了済み
          </label>
        </div>
        
        <div className="button-group">
          <button type="submit" disabled={submitting}>
            {submitting ? '送信中...' : '作成する'}
          </button>
          <button type="button" onClick={() => navigate('/')} disabled={submitting}>
            キャンセル
          </button>
        </div>
      </form>
    </div>
  )
}

export default TaskCreate 