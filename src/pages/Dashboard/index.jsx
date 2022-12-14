import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/elements/Input";
import Label from "../../components/elements/Label";
import SubmitButton from "../../components/elements/SubmitButton";
import Textarea from "../../components/elements/Textarea";
import Form from "../../components/layouts/Form";
import Modal from "../../components/layouts/Modal";
import Profile from "../../components/layouts/Profile";
import Travels from "../../components/lists/Travels";
import { useUser } from "../../providers/user";
import travelsServices from "../../services/travels";
import styles from "./styles.module.css";

//VALIDATION FORM
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createTravelSchema } from "../../utils/schemas";

const DashboardPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createTravelSchema),
  });

  const [travels, setTravels] = useState([]);
  const { userId } = useUser();
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = async (data) => {
    const newTravel = await travelsServices.create({
      userId,
      ...data,
      startDate: new Date(data.startDate).toISOString(),
      endDate: new Date(data.endDate).toISOString(),
    });
    setTravels((prevState) => [...prevState, newTravel]);
    setModalIsOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId]);

  useEffect(() => {
    const loadTravels = async () => {
      const travels = await travelsServices.list();
      setTravels(travels);
    };

    loadTravels();
  }, []);

  return (
    <div className={styles.container}>
      <Profile />
      <main className={styles.main}>
        {!travels.length ? (
          <div className={styles.primaryTravel}>
            <h2>Voc?? ainda n??o tem nenhuma viagem!</h2>
            <button className={styles.btn} onClick={openModal}>
              Desejo criar minha primeira viagem
            </button>
          </div>
        ) : (
          <>
            <Travels
              travels={travels}
              setTravels={setTravels}
              openModal={openModal}
            />
          </>
        )}
        {modalIsOpen && (
          <Modal>
            <Form title="Criar Viagem" onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor="city">T??tulo</Label>
              <Input
                type="text"
                title="T??tulo da Viagem"
                name="title"
                placeholder="D?? um nome ?? sua viagem"
                required
                register={register}
              />

              <div className={styles.dates}>
                <div className={styles.dateContainer}>
                  <Label htmlFor="startDate">Data de In??cio</Label>
                  <Input
                    type="date"
                    title="Data de In??cio"
                    name="startDate"
                    placeholder=""
                    required
                    register={register}
                  />
                </div>
                <div className={styles.dateContainer}>
                  <Label htmlFor="endDate">Data de T??rmino</Label>
                  <Input
                    type="date"
                    title="Data de T??rmino"
                    name="endDate"
                    placeholder=""
                    required
                    register={register}
                  />
                </div>
              </div>

              <Label htmlFor="notes">Descri????o</Label>
              <Textarea
                type="text"
                title="Descri????o"
                name="description"
                placeholder="D?? uma descri????o ?? sua viagem"
                register={register}
              />

              <div className={styles.btnsContainer}>
                <SubmitButton title="Salvar Viagem">Salvar Viagem</SubmitButton>
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
  );
};

export default DashboardPage;
