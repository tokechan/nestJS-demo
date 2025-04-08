import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

// ここではプレースホルダーとして、後で実装する予定のページをインポートするコメントを残しています
// import TaskList from './pages/TaskList'
// import TaskCreate from './pages/TaskCreate'
// import TaskDetail from './pages/TaskDetail'

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>タスク管理アプリ</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">タスク一覧</Link>
              </li>
              <li>
                <Link to="/create">新規作成</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<div>タスク一覧ページ（開発中）</div>} />
            <Route path="/create" element={<div>タスク作成ページ（開発中）</div>} />
            <Route path="/tasks/:id" element={<div>タスク詳細ページ（開発中）</div>} />
          </Routes>
        </main>
        
        <footer>
          <p>&copy; 2023 タスク管理アプリ</p>
        </footer>
      </div>
    </Router>
  )
}

export default App 