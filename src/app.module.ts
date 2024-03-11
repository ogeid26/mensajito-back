import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// ORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'dbuser',
      password: 'root',
      database: 'mensajitos_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    MessagesModule
    ],

  controllers: [AppController ],
  providers: [AppService],

})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
