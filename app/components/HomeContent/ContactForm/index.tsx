"use client";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface IFormInput {
  entityName: string;
  firstName: string;
  lastName: string;
  secondLastName?: string;
  email: string;
  country: string;
  phone: string;
  terms: boolean;
}

const ContactForm = () => {
  const [countrySelected, setCountrySelected] =
    useState<string>("Selecciona tu país");

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormInput>();

  const handlePhoneChange = (e: any, value: any) => {
    setValue("phone", `+${value.dialCode} ${e.slice(value.dialCode.length)}`);
  };

  const countryList = [
    { value: "spain", label: "España" },
    { value: "argentina", label: "Argentina" },
    { value: "colombia", label: "Colombia" },
    { value: "peru", label: "Perú" },
    { value: "chile", label: "Chile" },
    { value: "mexico", label: "México" },
    { value: "usa", label: "Estados Unidos" },
    { value: "canada", label: "Canadá" },
    { value: "uk", label: "Reino Unido" },
    { value: "france", label: "Francia" },
    { value: "germany", label: "Alemania" },
    { value: "italy", label: "Italia" },
    { value: "portugal", label: "Portugal" },
  ];

  const openListAndClose = (id: string) => {
    const list = document.getElementById(id);
    const lists = document.querySelectorAll("[role='listbox']");
    lists.forEach((list) => {
      if (list.id !== id) {
        list.classList.replace("block", "hidden");
      }
    });
    if (list && list.classList.contains("hidden")) {
      list.classList.replace("hidden", "block");
    } else if (list && list.classList.contains("block")) {
      list.classList.replace("block", "hidden");
    }
  };

  const onSubmit = async(formData: IFormInput) => {
    const data = {
      data: formData
    }

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(data),
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, requestOptions);
    const dataResponse = await response.json();
    
    if (dataResponse && !dataResponse.errors) {
      alert("Formulario enviado correctamente");
    } else {
      alert("Ha ocurrido un error, por favor intenta de nuevo");
    }
  };

  return (
    <div id="contactForm">
      <header className={`text-center mx-auto mt-8 mb-8 md:mt-20`}>
        <h2 className="text-4xl leading-normal mb-2 font-bold text-gray-700">
          Ponte en contacto con nosotros
        </h2>
        <span className=" text-md font-light md:text-xl color-primary">
        Transforma digitalmente tu campeonato y enfócate en lo que realmente importa: disfrutar del deporte
        </span>
      </header>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg mb-12"
      >
        <div className="mb-4">
          <label
            htmlFor="entityName"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre del camponato
          </label>
          <input
            id="entityName"
            {...register("entityName", {
              required: true,
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 3 caracteres",
              },
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.entityName && (
            <span className="text-red-600 text-sm">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre *
          </label>
          <input
            id="firstName"
            {...register("firstName", {
              required: true,
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 3 caracteres",
              },
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.firstName && (
            <span className="text-red-600 text-sm">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Primer Apellido *
          </label>
          <input
            id="lastName"
            {...register("lastName", {
              required: true,
              minLength: {
                value: 2,
                message: "El nombre debe tener al menos 3 caracteres",
              },
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.lastName && (
            <span className="text-red-600 text-sm">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="secondLastName"
            className="block text-sm font-medium text-gray-700"
          >
            Segundo Apellido
          </label>
          <input
            id="secondLastName"
            {...register("secondLastName")}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El email no es válido",
              },
            })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.email && (
            <span className="text-red-600 text-sm">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            País *
          </label>
          <div className="flex">
            <div className="relative mt-2 w-full">
              <button
                type="button"
                className="relative w-full rounded-md py-2 pl-3 pr-10 color-primary shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 border-primary hover-border-primary-dark px-4 text-center"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                onClick={() => openListAndClose(`listbox-option`)}
              >
                <span className="flex items-center justify-center">
                  <span className="ml-3 block truncate">{countrySelected}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              <ul
                className={`absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm hidden`}
                role="listbox"
                id={`listbox-option`}
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
              >
                {countryList.map((country: any, index: number) => (
                  <li
                    key={index}
                    className="relative select-none py-2 pl-3 pr-9 text-gray-900 cursor-pointer hover:bg-gray-300"
                    id="listbox-option-0"
                    role="option"
                    onClick={() => {
                      setValue("country", country.value);
                      setCountrySelected(country.label);
                      openListAndClose(`listbox-option`);
                    }}
                  >
                    <div className="flex items-center">{country.label}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {errors.country && (
            <span className="text-red-600 text-sm">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Teléfono *
          </label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: true,
              validate: (value) => {
                return value.length > 9 ? true : "Número de teléfono inválido";
              },
            }}
            render={({ field }) => (
              <PhoneInput
                country={"es"}
                value={field.value}
                countryCodeEditable={false}
                onChange={(e, phone) => handlePhoneChange(e, phone)}
                inputStyle={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #d1d5db",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  paddingLeft: "3rem",
                }}
                containerClass="mt-2"
                inputClass="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                dropdownClass="bg-white"
                searchClass="bg-white"
              />
            )}
          />
          {errors.phone && (
            <span className="text-red-600 text-sm">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="my-8">
          <p className="text-xs my-2">
            <strong>PROTECCIÓN DE DATOS:</strong> De conformidad con las
            normativas de protección de datos, le facilitamos la siguiente
            información del tratamiento:
          </p>
          <p className="text-xs my-2">
            <strong>Responsable:</strong> MUDEPO 1988 SL Fines del tratamiento:
            Atender su solicitud y contactarle para ofrecerle la información
            solicitada.
          </p>
          <p className="text-xs my-2">
            <strong>Derechos:</strong> acceso, rectificación, portabilidad,
            supresión, limitación y oposición
          </p>
          <p className="text-xs my-2">
            <strong>Más información</strong> del tratamiento en la{" "}
            <Link className="text-blue-500 underline" href={"/politica-de-privacidad"} target="_blank">
              Política de privacidad
            </Link>
          </p>
        </div>

        <div className="mb-4">
          <input
            type="checkbox"
            id="terms"
            {...register("terms", { required: true })}
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm font-medium text-gray-700">
            He leído y acepto la política de privacidad de MUDEPO 1988 SL y
            consiento el tratamiento de mis datos con los fines expuestos.
            {/* Acepto las{" "}
            <Link
              href="/aviso-legal"
              target="_blank"
              className="text-indigo-600"
            >
              condiciones
            </Link>{" "}
            y{" "}
            <Link
              href="/politica-de-privacidad"
              target="_blank"
              className="text-indigo-600"
            >
              política de protección de datos
            </Link> */}
          </label>
          {errors.terms && (
            <span className="block text-red-600 text-sm">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary hover-bg-primary-dark text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Enviar formulario
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
