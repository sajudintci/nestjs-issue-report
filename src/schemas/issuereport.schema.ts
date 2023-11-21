import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type IssueReportDocument = HydratedDocument<IssueReport>;

@Schema({ timestamps: true })
export class IssueReport {
  @Prop({ required: false })
  caseID: string;

  @Prop({ required: true })
  repoted: string;

  @Prop({ required: false })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  remark: string;

  @Prop({ required: true, type: Date })
  dateTime: string;

  @Prop({ required: true, default: 'OPEN' })
  status: string;
}
export const IssueReportSchema = SchemaFactory.createForClass(IssueReport);
