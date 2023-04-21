/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './app/auth/auth.module';
import { CommonModule } from './app/common/common.module';
import { MessagesModule } from './app/messages/messages.module';

@Module({
  // imports: [AppModule],
  imports: [
    // ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nest',
      password: 'nest',
      database: 'nest',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    AuthModule, 
    CommonModule, 
    MessagesModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
