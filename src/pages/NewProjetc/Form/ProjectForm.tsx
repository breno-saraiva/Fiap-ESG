import Select from "../components/select";
import { Input } from "../components/input";
import { SubmitButton } from "../components/button";
import React, { useEffect, useState } from "react";
import { getCategorias } from "../../../api/getCategorias";
import { getCategoriasApiRes, projectType } from "../../../types";
import { listProjectProps } from "../../../api/listProjects";

type ProjectFormProps = {
  textBtn?: string;
  projectData?: projectType;
  handleOnSubmit: (e: listProjectProps) => void;
};

const ProjectForm: React.FC<ProjectFormProps> = ({
  textBtn,
  projectData,
  handleOnSubmit,
}) => {
  const [categories, setCategories] = useState<getCategoriasApiRes[]>([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    const getCategories = async () => {
      const categorias = await getCategorias();
      setCategories(categorias);
    };
    getCategories();
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    handleOnSubmit(project as listProjectProps);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
    const categoryId = e.target.value;
    const selectedCategory = categories.find(
      (category) => category.id === categoryId
    );
    if (selectedCategory) {
      setProject((prevState) => ({
        ...prevState,
        categories: {
          id: categoryId,
          name: selectedCategory.name,
        },
      }));
    }
  }

  return (
    <form onSubmit={submit} className="w-full flex flex-col py-8 px-0">
      <div>
        <Input
          handleOnChange={handleChange}
          type="text"
          text="nome do projeto"
          name="name"
          placeholder="Insira o nome do projeto"
        />
      </div>
      <div>
        <Input
          handleOnChange={handleChange}
          type="number"
          text="orçamento do projeto"
          name="orçamento"
          placeholder="Insira o orçamento total"
        />
      </div>
      <Select options={categories} handleOnchange={handleCategory} />
      <SubmitButton type="submit" text={textBtn} />
    </form>
  );
};

export { ProjectForm };
