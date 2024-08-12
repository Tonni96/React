import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  // estado
  // crear la funcion envioDelFormulario
  // crear la funcion del handleChange

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { nombre: "", email: "", telefono: "",},
    onSubmit: (data) => {
      console.log("se envia");
      console.log(data);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("este campo es obligatorio")
        .min(5, "minimo 5")
        .max(15, "maximo 15"),
      email: Yup.string()
        .email("el email debe tener @")
        .required("este campo es obligatorio"),
      telefono: Yup.string()
        .required("este campo es obligatorio")
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/,
          "debe tener una mayuscula "
        ),
    }),
    validateOnChange: false,
  });

  //   console.log(values);
  console.log(errors); // {email: "dsadsa", nombre:"dsa"} - {}
  console.log(errors.nombre); // ---> undefined | texto

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="text"
        label="nombre"
        name="nombre"
        onChange={handleChange}
        error={errors.nombre ? true : false}
        helperText={errors.nombre}
      />
      {/* {errors.nombre && <span> {errors.nombre}</span>} */}
      <TextField
        variant="outlined"
        type="text"
        label="email"
        name="email"
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <TextField
        variant="outlined"
        type="number"
        label="telefono"
        name="contraseña"
        onChange={handleChange}
        error={errors.contraseña ? true : false}
        helperText={errors.contraseña}
      />
      
      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  );
};

export default CheckoutFormik;