import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const EightPage = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less.")
          .required("Name must not be empty."),
        email: Yup.string()
          .email("Please enter a valid email.")
          .required("Email must not be empty.")
      })}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <Field
            name="name"
            render={({ field, meta }) => (
              <input
                type="text" {...field}
                className={meta.error ? "invalid" : ""}
              />
            )}
          />
          <ErrorMessage name="name">
            {(err) => <p className="error-text">{err}</p>}
          </ErrorMessage>
          <label htmlFor="email">Your E-Mail</label>
          <Field
            name="email"
            render={({ field, meta }) => (
              <input
                type="text" {...field}
                className={meta.error ? "invalid" : ""}
              />
            )}
          />
          <ErrorMessage name="email">
            {(err) => <p className="error-text">{err}</p>}
          </ErrorMessage>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default EightPage;