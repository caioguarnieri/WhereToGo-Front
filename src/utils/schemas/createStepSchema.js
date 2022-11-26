import * as yup from "yup";

export const createStepSchema = yup.object().shape({
  destination: yup.string().trim().required("Destino da parada obrigatório"),
  description: yup.string().trim().required("Descrição obrigatória"),
  startDate: yup.string().trim().required("Data inicial obrigatória"),
  endDate: yup.string().trim().required("Data inicial obrigatória"),
  budget: yup.number().required("Orçamento obrigatório"),
  status: yup.string().trim().required("Status obrigatório"),
});

export default createStepSchema;
