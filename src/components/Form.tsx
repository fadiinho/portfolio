import { useState } from "react";
import { useForm, SubmitHandler, UseFormRegister, FieldErrorsImpl } from "react-hook-form";

interface InputProps {
  name: keyof Inputs;
  placeholder?: string;
  required?: boolean;
  type?: string;
  defaultValue?: string;
  placeholderAlwaysVisible?: boolean;
  pattern?: RegExp;
  register: UseFormRegister<Inputs>
  error: Partial<FieldErrorsImpl<Inputs>>
}

type Inputs = {
  name: string;
  github: string;
  description: string;
  liveDemo: string;
  screenshotUrl: string;
  stacks: string;
}

export function Input ({ name, placeholder, type, defaultValue, placeholderAlwaysVisible, register, error, ...registerOptions }: InputProps) {
  const [onFocus, setOnFocus] = useState(false);
  
  return (
    <div className="relative flex items-center">
      <input 
        type={type || "text"}
        placeholder={placeholder} 
        className={`bg-transparent rounded border-secondary focus:ring-0 focus:border-white focus:border-opacity-90 ${onFocus && "placeholder:opacity-0"} ${ !!error[name] ? "focus:border-red-500 border-red-500" : ""}`}
        onFocus={() => setOnFocus(true)}
        defaultValue={defaultValue}
        {...register(name, { onBlur: () => setOnFocus(false), ...registerOptions })}
      />
      <span className={`left-3 absolute rounded bg-background opacity-0 text-white text-opacity-90 transition-transform ${(onFocus || placeholderAlwaysVisible) && "-translate-y-5 opacity-100"}`}>{placeholder}</span>
    </div>
  )
}

export const NewProjectForm = () => {
  const { register, handleSubmit, formState: { errors }, reset} = useForm<Inputs>();
  const [ isLoading, setIsLoading ] = useState(false);

  // TODO: Handle possible errors and show to the user
  const onSubmit: SubmitHandler<Inputs> = async (_data) => {
    setIsLoading(true)
    await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ..._data, stacks: _data.stacks.split(", ") })
    });
    setIsLoading(false)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 items-center"
    >
      <Input required register={register} error={errors} name="name" placeholder="Name" />
      <Input required register={register} error={errors} name="description" placeholder="Description" />
      <Input required register={register} error={errors} name="github" placeholder="Github URL" />
      <Input register={register} error={errors} name="liveDemo" placeholder="Demo URL" />
      <Input register={register} error={errors} name="screenshotUrl" placeholder="Screenshot URL" />
      <Input required register={register} error={errors} pattern={/(^(\w+)(,\s*\w+\s*\w*)*$)/g} name="stacks" placeholder="Stacks" />
      <button className="px-4 py-2 max-w-min border border-primary hover:bg-primary hover:bg-opacity-20 rounded" type="submit">
        {isLoading && <div className="mx-6 w-4 h-6 border-t-2 border-t-primary rounded-full animate-spin"></div>}
        {!isLoading && <span className="mx-4">Add</span>}
      </button>
    </form>
  )
}
