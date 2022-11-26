import * as yup from "yup";

const signupSchema = yup.object().shape({
  name: yup.string().trim().required("Nome obrigatório"),
  nationality: yup.string().trim().required("Nacionalidade obrigatória"),
  email: yup
    .string()
    .trim()
    .required("Email obrigatório")
    .email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .trim()
    .matches(/(?=.*[A-Z])/, "A senha deve ter, no mínimo, uma letra maiúscula")
    .matches(/^(?=.*[a-z])/, "A senha deve ter, no mínimo, uma letra minúscula")
    .matches(/(?=.*[0-9])/, "A senha deve ter, no mínimo, um número")
    .matches(
      /(?=.*[!@#$%^&*.])/,
      "A senha deve ter, no mínimo, um caractere especial"
    )
    .min(8, "A senha deve ter, no mínimo, 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Senhas incompatíveis"),
});

export default signupSchema;
