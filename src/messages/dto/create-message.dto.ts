import { IsString, MinLength } from "class-validator";

export class CreateMessageDto {
    @IsString()
    body: string;
}
