import { IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(5)
    username: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}
