import * as yup from "yup";

const signinSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório").trim("Nome obrigatório"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .trim("Senha obrigatória"),
});

export default signinSchema;
