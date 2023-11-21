import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  IssueReport,
  IssueReportDocument,
} from 'src/schemas/issuereport.schema';
import { Model } from 'mongoose';

@Injectable()
export class IssueReportService {
  constructor(
    @InjectModel(IssueReport.name)
    private issueReportModel: Model<IssueReportDocument>,
  ) {}
  async create(data: any) {
    try {
      return await this.issueReportModel.create(data);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async findAll() {
    try {
      return await this.issueReportModel.find();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async findOne(id: string) {
    try {
      return await this.issueReportModel.findById(id);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async update(id: string, data: any) {
    try {
      return await this.issueReportModel.findByIdAndUpdate(id, data);
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async remove(id: string) {
    try {
      return await this.issueReportModel.findByIdAndDelete(id);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}
