import Swal from "sweetalert2";

export const successModal = (text: string) => {
  Swal.fire({
    title: "Éxito!",
    text: text,
    icon: "success",
  });
};

export const errorModal = (error: string) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: error,
  });
};

export const deleteWarningModal = ({
  title,
  confirmCb,
  cancelCb,
  finallyCb,
}: {
  title: string;
  confirmCb: () => Promise<any>;
  cancelCb?: () => Promise<any>;
  finallyCb?: () => Promise<any>;
}) => {
  Swal.fire({
    title: `¿Estás segur@ de eliminar ${title}?`,
    text: "Esta acción es irreversible",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
  })
    .then(async ({ isConfirmed }: { isConfirmed: boolean }) => {
      if (isConfirmed) {
        await confirmCb();
      } else {
        cancelCb && (await cancelCb());
      }
      return isConfirmed;
    })
    .then((isConfirmed) => {
      if (isConfirmed) {
        successModal(`La acción se ha realizado`);
      }
    })
    .catch(() => {
      errorModal("El producto no se pudo eliminar");
    })
    .finally(async () => {
      finallyCb && (await finallyCb());
    });
};
