import { Module } from '@nestjs/common';
import { IssueReportService } from './issue-report.service';
import { IssueReportController } from './issue-report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { IssueReport, IssueReportSchema } from 'src/schemas/issuereport.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: IssueReport.name, schema: IssueReportSchema },
    ]),
  ],
  controllers: [IssueReportController],
  providers: [IssueReportService],
})
export class IssueReportModule {}
