import "./RecipeForm.css";
import React, { useState } from "react";
import { addCategory } from "../services/apiFacade";
import { useLocation } from "react-router-dom";

const EMPTY_CATEGORY = {
  id: null,
  name: "",
};

export default function CategoryForm() {
  const categoryToEdit = useLocation().state || null;
  const [formData, setFormData] = useState(categoryToEdit || EMPTY_CATEGORY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newCategory = await addCategory(formData);
    alert("New category added");
    console.info("New Category", newCategory);
  };

  return (
    <>
      <h2>Add Category</h2>
      <form id="categoryForm">
        <div className="form-group">
          <label htmlFor="name">Category name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <button onClick={handleSubmit}>Add Category</button>
      </form>
    </>
  );
}
