import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { LocalGuard } from './guards/local.guard';
import { JwtAuthGuard } from './guards/jwt.guard';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(){}

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Req() req: Request){
        return req.user;
    }

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request){
        console.log('Inside Auth Controller');
        return req.user;
    }
}
