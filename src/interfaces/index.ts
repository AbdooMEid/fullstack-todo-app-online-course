export interface IRegisterInput {
  name: "username" | "email" | "password";
  placeholder: string;
  type: string;
  validation: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
  };
}

// export interface IErrorResponse {
//   error: {
//     details?: {
//       errors: {
//         message: string;
//       }[];
//     };
//     message?: string;
//   };
// }

// export interface ITodo {
//   id: number;
//   title: string;
//   description: string;
// }
