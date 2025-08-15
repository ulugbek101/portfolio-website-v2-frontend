import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PostsPage from "./pages/posts/PostsPage.jsx";
import PostDetail from "./pages/posts/PostDetail.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
