const estudiante = (
    {
        ID: {
            type: Number,
            required: [true, "Please enter a product name"]
        },
        Nombre: {
            type: String,
            required: true,
        },
        Apellido: {
            type: String,
            required: true,
        },
        fecha_nacimiento: {
            type: Date,
            required: false,
        },
        correo_electronico: {
            type: String,
            required: false,
        }
    }
)