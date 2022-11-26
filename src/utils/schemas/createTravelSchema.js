import * as yup from "yup";

const createTravelSchema = yup.object().shape({
  title: yup.string().trim().required("Título obrigatório"),
  description: yup.string().trim().required("Descrição obrigatória"),
  startDate: yup.string().trim().required("Data inicial obrigatória"),
  endDate: yup.string().trim().required("Data inicial obrigatória"),
});

export default createTravelSchema;
