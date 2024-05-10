import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Formik, Field, Form, ErrorMessage } from "formik";
import CSS from "./ContactForm.module.css";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name cannot exceed 50 characters"),
  number: Yup.string()
    .typeError("That doesn't look like a phone number")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Number is required")
    .min(3, "Number must be at least 3 characters")
    .max(50, "Number cannot exceed 50 characters"),
});

export default function ContactForm({ contacts, onAdd }) {
  const [nameFieldId, setNameFieldId] = useState("");
  const [numberFieldId, setNumberFieldId] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    setId(nanoid());
    setNameFieldId(nanoid());
    setNumberFieldId(nanoid());
  }, [contacts]);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: id,
      name: values.name,
      number: values.number,
    });
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={CSS.form}>
          <label htmlFor={nameFieldId} className={CSS.label}>
            Name
          </label>
          <Field name="name" type="text" className={CSS.input} />
          <ErrorMessage name="name" component="span" className={CSS.error} />

          <label htmlFor={numberFieldId} className={CSS.label}>
            Number
          </label>
          <Field name="number" type="tel" className={CSS.input} />
          <ErrorMessage name="number" component="span" className={CSS.error} />

          <button type="submit" className={CSS.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
