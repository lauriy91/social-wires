import { Module } from '@nestjs/common';
import { AuthService } from './auth/services/auth.service';

@Module({
  providers: [AuthService]
})
export class AppModule {}
