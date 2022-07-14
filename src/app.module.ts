import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.17.0.3',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-manager',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}