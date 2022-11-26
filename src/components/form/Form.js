import React from "react";
import { useForm } from "react-hook-form";
import Input from "../input/Input";
import Label from "../label/Label";
import Textarea from "../textarea/Textarea";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
import "yup-phone";

const phoneRegExp = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;

const schema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  phone_number: yup
    .string()
    .matches(phoneRegExp, `Phone number is not valid Ex:(0932929321)`),
  message: yup.string().required("Please enter a message"),
});

const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const clearWaitingQueue = () => {
    toast.clearWaitingQueue();
  };

  const handleSubmitForm = (values) => {
    const headers = {
      Authorization: "Api-Key dummy",
    };
    try {
      const getPhoneNumber = values.phone_number;
      const convertPhoneNumber = `+84${getPhoneNumber.slice(1)}`;
      values.phone_number = convertPhoneNumber;
      axios.post("https://mic.t-solution.vn/api/v2/submissions/", values, {
        headers,
      });
      toast.success("Submit form successfully");
      clearWaitingQueue();
      reset({});
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="flex flex-col gap-y-[32px]">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              control={control}
              name="name"
              type="text"
              placeholder="John Wick"
              error={errors.name?.message}
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[20px]">
            <div>
              <Label htmlFor="phone_number">Phone</Label>
              <Input
                control={control}
                name="phone_number"
                type="text"
                placeholder="0932929853"
                error={errors.phone_number?.message}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                control={control}
                name="email"
                type="email"
                placeholder="a@gmail.com"
                error={errors.email?.message}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="message">message</Label>
            <Textarea
              name="message"
              control={control}
              placeholder="I need some help..."
              error={errors.message?.message}
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:justify-end">
          <button
            type="submit"
            className="mt-[24px] py-4 px-6 border border-black rounded-lg text-base leading-4 font-extrabold text-[#000]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
