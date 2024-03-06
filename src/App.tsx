import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
// import Recipes from "./recipes/RecipeList";
import RecipeForm from "./recipes/RecipeForm";
import Login from "./security/Login";
import Logout from "./security/Logout";
import { useAuth } from "./security/AuthProvider";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import Contact from "./Contact";
import RecipesLayout from "./recipes/RecipesLayout";
import NotFound from "./NotFound";
import RequireAuth from "./security/RequireAuth";
import AdminCategories from "./recipes/AdminCategories";

export default function App() {
  const auth = useAuth();
  auth.isLoggedIn();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes" element={<RecipesLayout />}>
          <Route path=":id" element={<Recipe />} />
          <Route path="test" element={<h1>Test</h1>} />
        </Route>
        <Route
          path="/add"
          element={
            <RequireAuth roles={["USER", "ADMIN"]}>
              <RecipeForm />
            </RequireAuth>
          }
        />
        <Route
          path="/addCategory"
          element={
            <RequireAuth roles={["ADMIN"]}>
              <AdminCategories />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
