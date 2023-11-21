import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IssueReportModule } from './issue-report/issue-report.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    IssueReportModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/issuereport'),
  ],
})
export class AppModule {}
