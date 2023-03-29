import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="email" {...register("email", {required: true})} />
      <input type="number" {...register("telefone", {pattern: "(xx) xxxxx-xxxx"})} />
      <input type="password" {...register("senha", {required: true, maxLength: 32})} />
      <input {...register("Causa")} />
      <input type="number" {...register("cnpj", {pattern: "XX.XXX.XXX/0001-XX"})} />
      <input type="text" {...register("Data-De-Criação", {pattern: "(?:((?:0[1-9]|1[0-9]|2[0-9])\/(?:0[1-9]|1[0-2])|(?:30)\/(?!02)(?:0[1-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/(?:19|20)[0-9]{2})"})} />
      <input {...register("Endereço", { pattern: /^[A-Za-z]-0-99999999/ })} />
      <input {...register("descrição", {required: true})} />
      <input type="submit" />
    </form>
  );
}
<button type="submit">Enviar</button>