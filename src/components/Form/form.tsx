import * as React from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn
} from 'react-hook-form';

type FormProps<TFieldValues extends FieldValues> = {
  children: React.ReactNode;
  methods: UseFormReturn<TFieldValues>;
  onSubmit?: SubmitHandler<TFieldValues>;
  onError?: SubmitErrorHandler<TFieldValues>;
  formProps?: Omit<React.FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>;
};

function Form<TFieldValues extends FieldValues>({
  children,
  methods,
  onSubmit,
  onError,
  formProps
}: FormProps<TFieldValues>) {
  const handleSubmit = onSubmit
    ? methods.handleSubmit(onSubmit, onError)
    : undefined;

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit} {...formProps}>
        {children}
      </form>
    </FormProvider>
  );
}

export { Form, type FormProps };
