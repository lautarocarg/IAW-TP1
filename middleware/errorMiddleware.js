function mustBeInteger(req, res, next) {
    const id = req.params.id
    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({ message: 'ID debe ser un número' })
    } else {
        next()
    }
}
function checkFieldsPost(req, res, next) {
    const { id, nombre, apellido, fechaNacimiento, correoElectronico } = req.body
    if (id && nombre && apellido && fechaNacimiento && correoElectronico) {
        next()
    } else {
        res.status(400).json({ message: 'Los campos son icorrectos' })
    }
}
module.exports = {
    mustBeInteger,
    checkFieldsPost
}