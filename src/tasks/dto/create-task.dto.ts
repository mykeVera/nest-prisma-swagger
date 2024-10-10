import {
    IsString,
    min,
    MinLength,
    minLength
} from 'class-validator'

export class CreateTaskDto{

    @IsString()
    @MinLength(3)
    title: string

    @MinLength(3)
    @IsString()
    description: string
}