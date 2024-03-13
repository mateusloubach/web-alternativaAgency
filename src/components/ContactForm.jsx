import React, { useState, useEffect } from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [radio, setRadio] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const isFormFilled =
      name.trim() !== "" &&
      email.trim() !== "" &&
      empresa.trim() !== "" &&
      tel.trim() !== "" &&
      message.trim() !== "" &&
      radio.trim() !== "";

    setIsSubmitDisabled(!isFormFilled);
  }, [name, email, empresa, tel, message, radio]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_lj4re8v";
    const templateID = "template_fgfr6vb";
    const publicKey = "2MpISzXtE2xVjBXIY";

    const templateParams = {
      from_name: name,
      to_name: "Alternativa Agency",
      from_email: email,
      from_empresa: empresa,
      from_tel: tel,
      message: message,
      radio: radio,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("email enviado com sucesso!", response);
        setName("");
        setEmail("");
        setEmpresa("");
        setTel("");
        setMessage("");
        setRadio("");
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log("erro ao enviar email", error);
      });
  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="emailForm">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Consultar
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nome" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <TextInput
            label="Email"
            type="email"
            name="E-mail"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label="Empresa"
            name="company"
            autoComplete="organization"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
          <TextInput
            label="Tel"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={tel}
            onChange={(e) => {
              const formattedTel = e.target.value.replace(/\D/g, "").replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
              setTel(formattedTel);
              if (formattedTel.length !== 15) {
                
              } else {

              }
            }}
          />
          <TextInput label="Mensagem" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Orçamento</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8" value={radio} onChange={(e) => setRadio(e.target.value)}>
              <RadioInput label="Até R$5K" name="budget" value="Até R$5K" />
              <RadioInput label="R$5K – R$25K" name="budget" value="de R$5k até R$25K" />
              <RadioInput label="R$25K – R$50K" name="budget" value="de R$25k até R$50K" />
              <RadioInput label="Acima de R$50K" name="budget" value="Acima de R$50K" />
            </div>
          </div>
        </div>

        {isSubmitted ? (
          <h2 className="text-green-600 ml-3 mt-4">Mensagem enviada com sucesso!</h2>
        ) : (
          <Button
            type="submit"
            disabled={isSubmitDisabled || tel.length !== 15}
            className={`mt-3 font-light ${isSubmitDisabled || tel.length !== 15 ? 'bg-gray-300 hover:bg-gray-300' : 'bg-black hover:bg-black'}`}
          >
            Vamos trabalhar juntos
          </Button>
        )}
      </form>
    </FadeIn>
  );
};

export default ContactForm;
