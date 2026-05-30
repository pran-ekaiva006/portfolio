import { useToast } from "@/hooks/use-toast";
import { Toast } from "@/components/ui/toast";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <>
      {toasts.map(({ id, title, description, variant, open }) =>
        open ? (
          <Toast
            key={id}
            title={title}
            description={description}
            variant={variant}
            onClose={() => dismiss(id)}
          />
        ) : null
      )}
    </>
  );
}