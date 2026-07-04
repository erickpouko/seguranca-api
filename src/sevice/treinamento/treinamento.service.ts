import { Injectable } from '@nestjs/common';
import { TreinamentoRepository } from 'src/repository/treinamento.repository';

@Injectable()
export class TreinamentoService {
    constructor (private repository: TreinamentoRepository) {}

  getDados() {
    return this.repository.findAll();  /*** */
  }

  getEpiById(id: number) {
    return this.repository.findById(id);
  }

  create(epi: any) { return this.repository.create(epi); }
  delete(id: number) { return this.repository.delete(id); }
  update(id: number, epi: any) { return this.repository.update(id, epi); }
  patch(id: number, epi: any) { return this.repository.patch(id, epi); }

}

