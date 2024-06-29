import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const initialValues = {
  name: "",
  number: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.number().positive().required("Required"),
});

export default function ContactForm({ onAdd }) {
  const id = useId();
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onAdd({
      id: nanoid(),
      ...values,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={`name-${id}`}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={`name-${id}`}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.container}>
          <label htmlFor={`number-${id}`}>Number</label>
          <Field
            className={css.field}
            type="number"
            name="number"
            id={`number-${id}`}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
