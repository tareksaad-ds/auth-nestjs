import { Injectable } from '@nestjs/common';
import { LoginPayload } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUser = [
    {
        id: 1,
        username:"tekoo30",
        password: "12345678"
    },
    {
        id: 2,
        username: "yasoo42",
        password: "12345678"
    }
];

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService){}
    validateUser({username, password}: LoginPayload){
        const findUser = fakeUser.find((user) => user.username === username);
        if(!findUser) return null;
        if(findUser.password === password) {
            const { password , ...user} = findUser;
           return this.jwtService.sign(user);
        }
    }
}
