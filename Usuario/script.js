document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
        title: "Todos los datos son correctos?",
        text: "Si hay datos incorrectos no se agendará la cita.",
        icon: "warning",
        showCancelButton: true,  // Permitir botón de cancelación para mejor UX
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, agendar!",
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Cita Agendada!",
                text: "Tu cita se ha agendado con éxito",
                icon: "success",
                confirmButtonText: "OK"
            }).then(() => {
                window.location.href = "index.html";  // Redireccionar a index.html
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "Cita No Agendada",
                text: "Tu cita no se ha agendado",
                icon: "error",
                confirmButtonText: "OK"
            }).then(() => {
                window.location.href = "index.html";  // Redireccionar a index.html
            });
        }
    });
});
