/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {

      const app: TestingModule = await Test.createTestingModule({
          controllers: [AppController],
          providers: [AppService],
      }).compile();

      appController = app.get<AppController>(AppController);
      appService = app.get<AppService>(AppService);
  });

    describe('getAutores', () => {

        it('Deveria retornar "Lista de autores"', () => {
            expect(appController.getAutores()).toBe('Lista de autores');
        });
    });

    describe('getLivros', () => {

        it('Deveria retornar "Lista de livros"', () => {
            expect(appController.getLivros()).toBe('Lista de livros');
        });
    });

    describe('getUsuarios', () => {
      
        it('Deveria retornar "Lista de usuários"', () => {
            expect(appController.getUsuarios()).toBe('Lista de usuários');
        });
    });
});