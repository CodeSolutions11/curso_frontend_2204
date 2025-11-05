"use client";

import { useState } from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

const TaskForm = ({ onTaskCreated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ title: "", description: "", priority: "medium" });
        setIsOpen(false);
        onTaskCreated();
      }
    } catch (err) {
      console.error("Error creando la tarea", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return <Button onClick={() => setIsOpen(true)}>+ Nueva Tarea</Button>;
  }
};
