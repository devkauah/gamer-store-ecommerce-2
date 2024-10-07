import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { PedidoModule } from './pedido/pedido.module';
import { DbModule } from './db/db.module';
import { PrismaProvider } from './db/prisma.provider';

@Module({
  imports: [ProdutoModule, PedidoModule, DbModule],
  controllers: [AppController],
  providers: [PrismaProvider],
})
export class AppModule {}
