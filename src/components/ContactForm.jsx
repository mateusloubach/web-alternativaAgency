import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Consultar
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nome" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="E-mail"
            autoComplete="email"
          />
          <TextInput
            label="Empresa"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Tel" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Mensagem" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Orçamento</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput label="R$25K – R$50K" name="budget" value="25" />
              <RadioInput label="R$50K – R$100K" name="budget" value="50" />
              <RadioInput label="R$100K – R$150K" name="budget" value="100" />
              <RadioInput label="Acima de R$150K" name="budget" value="150" />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Vamos trabalhar juntos
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
