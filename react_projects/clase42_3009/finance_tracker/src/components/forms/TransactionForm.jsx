import { useTransition } from "react";
import { useForm } from "react-hook-form";
import useExpenseStore from "../../stores/useExpenseStore";
import { CATEGORIES } from "../../lib/catagories";
import Button from "../ui/Button";
import Card from "../ui/Card";

const TransactionForm = ({ onClose }) => {
  const [isPending, startTransition] = useTransition();
  const addTransaction = useExpenseStore((state) => state.addTransaction);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: "expense",
      date: new Date().toISOString().split("T")[0],
    },
  });

  const watchType = watch("type");

  const onSubmit = (data) => {
    startTransition(() => {
      addTransaction({
        ...data,
        amount: parseFloat(data.amount),
      });

      reset();
      onClose();
    });
  };

  return (
    <Card>
      <h3>Nueva Transacción</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Tipo
            </label>

            <select
              {...register("type", { required: "El tipo es requerido" })}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="income">Ingreso</option>
              <option value="expense">Gasto</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Categoría
            </label>
            <select
              {...register("category", {
                required: "La categoría es requerida",
              })}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {CATEGORIES[watchType].map((category) => (
                <option key={category.id} value={category.id}>
                  {category.icon} {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Descripción
          </label>
          <input
            type="text"
            {...register("description", {
              required: "La descripción es requerida",
            })}
            placeholder="EJ: Compra en supermercado"
            className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Monto
            </label>
            <input
              type="number"
              step="0.01"
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="0.00"
              {...register("amount", {
                required: "El monto es requerido",
                min: { value: 0.01, message: "El monto debe ser mayor a 0" },
              })}
            />
            {errors.amount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.amount.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">
            Fecha
          </label>
          <input
            type="date"
            {...register("date", { required: "La fecha debe es requerida" })}
          />
        </div>

        <div>
          <Button type="submit" className="flex-1" disabled={isPending}>
            {isPending ? "Guardando" : "Guardar Transaction"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="px-6"
            onClick={onClose}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default TransactionForm;
