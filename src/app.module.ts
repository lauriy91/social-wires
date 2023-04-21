/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './app/auth/auth.module';
import { CommonModule } from './app/common/common.module';
import { MessagesModule } from './app/messages/messages.module';
import { UsersModule } from './users/users.module';

@Module({
  // imports: [AppModule],
  imports: [
    // ConfigModule.forRoot(), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: !!process.env.DB_SYNC,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    AuthModule, 
    CommonModule, 
    MessagesModule, 
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
