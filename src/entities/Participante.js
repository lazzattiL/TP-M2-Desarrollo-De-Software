export class Participante {
    constructor(dni, mail, referidos = []) {
        this.nombre = null;
        this.apellido = null;
        this.mail = mail;
        this.dni = dni;
        this.medioContactoPreferido = null;
        this.institucion = null;
        this.referidos = referidos;
        this.categoria = null;
        this.probabilidad = null;
    }

    referir(referido) {
        this.referidos.push(referido);
    }

    contarReferidosConvertidos() {
        let referidosConvertidos = [];

        this.referidos.forEach(r => {
            if (r.solicitudAceptada) {
                referidosConvertidos.push(r);
            };
        });

        return referidosConvertidos;
    };
}