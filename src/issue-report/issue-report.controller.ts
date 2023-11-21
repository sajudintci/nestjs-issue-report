import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  Put,
} from '@nestjs/common';
import { IssueReportService } from './issue-report.service';
import { microserviceConfig } from 'src/microserviceConfig';
import { Client, ClientKafka, EventPattern } from '@nestjs/microservices';

@Controller('issue-report')
export class IssueReportController {
  constructor(private readonly issueReportService: IssueReportService) {}

  @Client(microserviceConfig)
  client: ClientKafka;
  async onModuleInit() {
    const requestPatterns = ['CreatedIssueReport'];

    requestPatterns.forEach((pattern) => {
      this.client.subscribeToResponseOf(pattern);
    });
  }

  @EventPattern('CreatedIssueReport')
  async eventCreate(payload: any) {
    try {
      if (typeof payload === 'object') {
        await this.issueReportService.create(payload);
        console.log('success created');
      } else {
        console.log('typeof payload not object');
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      console.log('process created done');
    }
  }

  @Post()
  async create(@Body() body: any, @Res() res) {
    try {
      await this.issueReportService.create(body);
      res.status(200).json({
        message: 'Success created',
        success: true,
      });
    } catch (e) {
      res.status(400).json({
        message: e.message,
        success: false,
      });
    }
  }

  @Get()
  async findAll(@Res() res) {
    try {
      const data = await this.issueReportService.findAll();
      res.status(200).json({
        message: 'Success get data',
        success: true,
        result: data,
      });
    } catch (e) {
      res.status(400).json({
        message: e.message,
        success: false,
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res) {
    try {
      const data = await this.issueReportService.findOne(id);
      res.status(200).json({
        message: 'Success get detail',
        success: true,
        result: data,
      });
    } catch (e) {
      res.status(400).json({
        message: e.message,
        success: false,
      });
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any, @Res() res) {
    try {
      const data = await this.issueReportService.update(id, body);
      res.status(200).json({
        message: 'Success updated',
        success: true,
        result: data,
      });
    } catch (e) {
      res.status(400).json({
        message: e.message,
        success: false,
      });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res) {
    try {
      const data = await this.issueReportService.remove(id);
      res.status(200).json({
        message: 'Success deleted',
        success: true,
        result: data,
      });
    } catch (e) {
      res.status(400).json({
        message: e.message,
        success: false,
      });
    }
  }
}
