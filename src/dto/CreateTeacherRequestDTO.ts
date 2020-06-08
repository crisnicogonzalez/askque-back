import { TeacherOcupation } from "../entity/TeacherOcupation";

export class CreateTeacherRequestDTO {
  legajo: number;
  name: string;
  lastname: string;
  asignature: string;
  email: string;
  ocupation: TeacherOcupation;
}
