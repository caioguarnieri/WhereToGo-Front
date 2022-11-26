import styles from "./styles.module.css";

import BgImage from "../../assets/bg-signup.jpg";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/elements/Input";
import InputError from "../../components/elements/InputError";
import Label from "../../components/elements/Label";
import SubmitButton from "../../components/elements/SubmitButton";
import Form from "../../components/layouts/Form";
import { useUser } from "../../providers/user";

//VALIDATION FORM
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../utils/schemas";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const { signup } = useUser();

  const onSubmit = async ({ name, email, password, nationality }) => {
    await signup({ name, email, password, nationality });
  };

  const { userId } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!!userId) {
      navigate("/dashboard");
    }
  }, [userId]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.image} src={BgImage} alt="Background" />

        <Form title="Cadastro" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            name="name"
            title="Nome"
            placeholder="Digite seu nome"
            required
            register={register}
          />
          {errors.name && <InputError>{errors.name.message}</InputError>}

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            title="Email"
            placeholder="Digite seu email"
            required
            register={register}
          />
          {errors.email && <InputError>{errors.email.message}</InputError>}

          <Label htmlFor="nationality">Nacionalidade</Label>
          <Input
            type="text"
            name="nationality"
            title="Nacionalidade"
            placeholder="Digite sua nacionalidade"
            required
            register={register}
          />
          {errors.nationality && (
            <InputError>{errors.nationality.message}</InputError>
          )}

          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            title="Senha"
            placeholder="Digite sua senha"
            required
            register={register}
          />
          {errors.password && (
            <InputError>{errors.password.message}</InputError>
          )}

          <Label htmlFor="passwordConfirmation">Confirmar Senha</Label>
          <Input
            type="password"
            name="passwordConfirmation"
            title="Confirmar Senha"
            placeholder="Confirme sua senha"
            register={register}
          />
          {errors.passwordConfirmation && (
            <InputError>{errors.passwordConfirmation.message}</InputError>
          )}

          <SubmitButton title="Cadastrar">Cadastrar</SubmitButton>

          <p className={styles.account}>
            Já tem uma conta?
            <Link className={styles.link} to="/">
              Fazer Login
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignupPage;
