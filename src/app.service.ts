/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getCurrentDateTime(): string {
    const currentDate = new Date();
    return `Data e hora atual: ${currentDate.toISOString()}`;
  }

  getUsersPage(page: number, limit: number): string {
    return `Retornando página ${page} de usuários, com limite de ${limit} por página.`;
  }

  getBooksPage(page: number, limit: number): string {
    return `Retornando página ${page} de livros, com limite de ${limit} por página.`;
  }
}