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
import { signinSchema } from "../../utils/schemas";

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signinSchema),
  });

  const { signin } = useUser();

  const onSubmit = async ({ name, password }) => {
    await signin({ name, password });
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
        <Form title="Login" onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="name">Nome de Usuário</Label>
          <Input
            type="text"
            name="name"
            title="Nome de Usuário"
            placeholder="Digite seu nome de usuário"
            register={register}
          />
          {errors.name && <InputError>{errors.name.message}</InputError>}

          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            name="password"
            title="Senha"
            placeholder="Digite sua senha"
            register={register}
          />
          {errors.password && (
            <InputError>{errors.password.message}</InputError>
          )}

          <SubmitButton title="Login">Login</SubmitButton>

          <p className={styles.account}>
            Ainda não tem uma conta?
            <Link className={styles.link} to="/signup">
              Fazer Cadastro
            </Link>
          </p>
        </Form>

        <img className={styles.image} src={BgImage} alt="Background" />
      </div>
    </div>
  );
};

export default SigninPage;
