import { Module } from '@nestjs/common';
import { DbController } from './db.controller';
import { PrismaProvider } from './prisma.provider/prisma.provider';
import { PrismaProvider } from './prisma.provider';

@Module({
  controllers: [DbController],
  providers: [PrismaProvider]
})
export class DbModule {}
