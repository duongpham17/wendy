import { useState, useEffect } from 'react';

type ValidationFn<T> = (values: T) => { [K in keyof T]?: string } | null;

type InputEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLSelectElement>;

function setDeepValue(obj: any, path: string[], value: any): any {
  if (path.length === 1) return { ...obj, [path[0]]: value };
  return {
    ...obj,
    [path[0]]: setDeepValue(obj[path[0]] || {}, path.slice(1), value),
  };
}

export const useForm = <T>(
  initialState: T,
  callback: CallableFunction,
  validation?: ValidationFn<T>
) => {
  const [values, setValues] = useState<T>(initialState);
  const [validationErrors, setValidationErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [customErrors, setCustomErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [loading, setLoading] = useState(false);
  const [edited, setEdited] = useState(false);

  const onChange = (event: InputEvent) => {
    const { name, value } = event.target;

    if (name.includes('.')) {
      const keys = name.split('.');
      const updated = setDeepValue(values, keys, value);
      setValues(updated);
    } else {
      setValues({ ...values, [name]: value } as T);
    }

    if (!edited) setEdited(true);
  };

  const onSetValue = (v: Partial<T>) => {
    setValues((state) => ({ ...state, ...v }));
    if (!edited) setEdited(true);
  };

  const onSetCustomErrors = (v: Partial<Record<keyof T, string>>) => {
    setCustomErrors((state) => ({ ...state, ...v }));
  };

  const clearErrors = () => {
    setValidationErrors({});
    setCustomErrors({});
  };

  const onClear = (state?: T) => {
    setValues(state ?? initialState);
    setEdited(false);
    clearErrors();
  };

  const handleSubmit = async () => {
    if (loading) return;

    const ve = validation ? validation(values) : {};
    const noErrors = !ve || Object.keys(ve).length === 0;

    if (noErrors) {
      setLoading(true);
      await callback();
      setLoading(false);
      setEdited(false);
    }

    setValidationErrors(ve ?? {});
  };

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    await handleSubmit();
  };

  useEffect(() => {
    return () => {
      setLoading(false);
      setEdited(false);
    };
  }, []);

  return {
    values,
    setValues,
    validationErrors,
    setValidationErrors,
    customErrors,
    setCustomErrors,
    onSetCustomErrors,
    loading,
    setLoading,
    edited,
    setEdited,
    onSetValue,
    onChange,
    onSubmit,
    handleSubmit,
    onClear,
    clearErrors,
  };
};

export default useForm;
