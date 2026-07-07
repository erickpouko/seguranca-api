import * as fs from 'fs';
export class RiscoRepository {
    findAll() {
        const dados = fs.readFileSync(
            './bd/risco.json',
            'utf8'
        );
        return JSON.parse(dados);
    }

    findById(id: number) {
        const risco = this.findAll();
        return risco.find((epi) => epi.id === id);
    }
    create(epi: any) {
        const risco = this.findAll();
        const novoId = risco.length > 0
            ? Math.max(...risco.map(e => e.id)) + 1
            : 1;
        const novoEpi = { id: novoId, ...epi };
        risco.push(novoEpi);
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(risco, null, 2),
            'utf8'
        );
        return novoEpi;
    }

    delete(id: number) {
        const risco = this.findAll();
        const idx = risco.findIndex(epi => epi.id === id);
        if (idx === -1) return false;
        risco.splice(idx, 1);
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(risco, null, 2),
            'utf8'
        );
        return true;
    }

    update(id: number, epi: any) {
        const risco = this.findAll();
        const idx = risco.findIndex(epi => epi.id === id);
        if (idx === -1) return false;
        risco[idx] = { id, ...epi };
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(risco, null, 2),
            'utf8'
        );
        return true;
    }

    patch(id: number, epi: any) {
        const risco = this.findAll();
        const idx = risco.findIndex(epi => epi.id === id);
        if (idx === -1) return false;
        risco[idx] = { ...risco[idx], ...epi };
        fs.writeFileSync(
            './bd/risco.json',
            JSON.stringify(risco, null, 2),
            'utf8'
        );
        return true;
    }

}