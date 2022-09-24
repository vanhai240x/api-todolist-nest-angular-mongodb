import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type StatusTodoDocument = StatusTodo & Document;

@Schema()
export class StatusTodo {
  @ApiProperty()
  @Prop()
  title: string;

  @ApiProperty()
  @Prop()
  code: string;
}

export const StatusTodoSchema = SchemaFactory.createForClass(StatusTodo);
