import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @ApiProperty()
  @Prop()
  title: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty()
  @Prop()
  deadline: EpochTimeStamp;

  @Prop()
  status: string;

  @ApiProperty()
  @Prop()
  statusId: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
