import { Module } from '@nestjs/common';
import { AppController } from './controller/epi.controller';
import { AppService } from './service/epi.service';
import { EpiRepository } from './repository/epi.repository';
import { TreinamentoService } from './service/treinamento.service';
import { TreinamentoRepository } from './repository/treinamento.repository';
import { TreinamentoController } from './controller/treinamento.controller';
import { RiscoService } from './service/risco.service';
import { RiscoRepository } from './repository/risco.repository';
import { RiscoController } from './controller/risco.controller';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, TreinamentoController, RiscoController, AuthController],
  providers: [AppService, EpiRepository, TreinamentoService, TreinamentoRepository, RiscoService, RiscoRepository, AuthService],
})
export class AppModule {}



