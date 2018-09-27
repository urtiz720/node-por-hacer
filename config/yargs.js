const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente  la tarea'
};

const argv = require('yargs')
    .command('crear', 'crear una nueva tarea', {
        descripcion
    })

.command('actualizar', 'actualza el estado de una tarea', {
    descripcion,
    completado
})

.command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}