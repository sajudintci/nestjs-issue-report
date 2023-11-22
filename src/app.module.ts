import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LibrariesHelper } from './helpers/libraries.helper';
import { IssueReportModule } from './issue-report/issue-report.module';

@Module({
  controllers: [AppController],
  providers: [AppService, LibrariesHelper],
  imports: [
    IssueReportModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/issuereport'),
  ],
})
export class AppModule {}
