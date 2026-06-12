export class Probabilidad {
    materias;
    participante;

    probabilidadDeGanar() {
        const institucion = this.participante.institucion;
        const categoria = this.participante.categoria;
        const referidosConvertidos = this.participante.contarReferidosConvertidos();
        let probabilidad

        referidosConvertidos.forEach(r => {
            let dniReferido = r.dni

            
        });
    }
}