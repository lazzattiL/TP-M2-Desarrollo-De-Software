export class Referido {
    dni;
    mail;
    solicitudAceptada;
    quienRefiere;
    fechaHora;

    aceptarSolicitud() {
        this.solicitudAceptada = true;
        this.fechaHora = new Date;

        return new Participante(this.dni, this.mail, this);
    }
}