import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// ORM
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432,
    //   username: 'postgres',
    //   password: 'postgres',
    //   database: 'pgWithNest',
    //   entities: [],
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    
    ],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
