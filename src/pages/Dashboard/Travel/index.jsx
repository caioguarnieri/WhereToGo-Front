import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../../../components/layouts/Modal";
import Profile from "../../../components/layouts/Profile";
import { useUser } from "../../../providers/user";
import styles from "./styles.module.css";
import travelsServices from "../../../services/travels";
import Steps from "../../../components/lists/Steps";
import Form from "../../../components/layouts/Form";
import Label from "../../../components/elements/Label";
import Input from "../../../components/elements/Input";
import Textarea from "../../../components/elements/Textarea";
import SubmitButton from "../../../components/elements/SubmitButton";
import stepsServices from "../../../services/steps";

//VALIDATION FORM
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createStepSchema } from "../../../utils/schemas";

const TravelPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createStepSchema),
  });

  const { id: travelId } = useParams();
  const { userId } = useUser();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [travel, setTravel] = useState({});
  const [steps, setSteps] = useState([]);

  const onSubmit = async (data) => {
    const newStep = await stepsServices.create({
      travelId,
      ...data,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
    });
    setSteps((prevState) => [...prevState, newStep]);
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId]);

  useEffect(() => {
    const loadTravel = async () => {
      const travel = await travelsServices.show(travelId);
      setTravel(travel);
      setSteps(travel.steps);
    };

    loadTravel();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Profile />
        <main className={styles.main}>
          {!steps.length ? (
            <div className={styles.primaryTravel}>
              <h2>Você ainda não tem nenhum destino!</h2>
              <button className={styles.btn} type="button" onClick={openModal}>
                Desejo criar meu primeiro destino
              </button>
            </div>
          ) : (
            <>
              <Steps steps={steps} openModal={openModal} />
            </>
          )}
          {modalIsOpen && (
            <Modal>
              <Form title="Adicionar Destino" onSubmit={handleSubmit(onSubmit)}>
                <Label htmlFor="destination">Destino da Parada</Label>
                <Input
                  type="text"
                  title="Destino da Parda"
                  name="destination"
                  placeholder="Digite o destino da parada"
                  required
                  register={register}
                />

                <div className={styles.dates}>
                  <div className={styles.dateContainer}>
                    <Label htmlFor="startDate">Data de Início</Label>
                    <Input
                      type="date"
                      title="Data de Início"
                      name="startDate"
                      placeholder=""
                      required
                      register={register}
                    />
                  </div>
                  <div className={styles.dateContainer}>
                    <Label htmlFor="endDate">Data de Término</Label>
                    <Input
                      type="date"
                      title="Data de Término"
                      name="endDate"
                      placeholder=""
                      required
                      register={register}
                    />
                  </div>
                </div>

                <Label htmlFor="budget">Orçamento</Label>
                <Input
                  type="text"
                  title="Orçamento"
                  name="budget"
                  placeholder="Digite quanto pretende gastar"
                  required
                  register={register}
                />

                <Label htmlFor="status">Status</Label>
                <Input
                  type="text"
                  title="Status"
                  name="status"
                  placeholder="Digite o status da parada"
                  required
                  register={register}
                />

                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  type="text"
                  title="Descrição"
                  name="description"
                  placeholder="Observações..."
                  register={register}
                />

                <div className={styles.btnsContainer}>
                  <SubmitButton title="Salvar Destino">
                    Salvar Destino
                  </SubmitButton>
                  <button
                    className={styles.close}
                    type="button"
                    onClick={closeModal}
                  >
                    Cancelar
                  </button>
                </div>
              </Form>
            </Modal>
          )}
        </main>
      </div>
    </>
  );
};

export default TravelPage;
