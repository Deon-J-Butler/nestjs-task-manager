import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '172.17.0.3',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'task-manager',
  autoLoadEntities: true,
  synchronize: true,
};
