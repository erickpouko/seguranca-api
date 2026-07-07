import { Module } from '@nestjs/common';
import { AppController } from './controller/epi.controller';
import { AppService } from './sevice/epi.service';
import { EpiRepository } from './repository/epi.repository';
import { TreinamentoService } from './sevice/treinamento.service';
import { TreinamentoRepository } from './repository/treinamento.repository';
import { TreinamentoController } from './controller/treinamento.controller';
import { RiscoService } from './sevice/risco.service';
import { RiscoRepository } from './repository/risco.repository';
import { RiscoController } from './controller/risco.controller';
@Module({
  imports: [],
  controllers: [AppController, TreinamentoController, RiscoController],
  providers: [AppService, EpiRepository, TreinamentoService, TreinamentoRepository, RiscoService, RiscoRepository],
})
export class AppModule {}

