import { Injectable } from '@nestjs/common';
import { User } from 'src/user.interface';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            "firstName": "Paco",
            "lastName": "Ruiz",
            "username": "PacoRuiz",
            "email": "paco@paco.es",
            "password": "aaaaaa"
        },
        {
            "firstName": "Pepe",
            "lastName": "Sanchez",
            "username": "PepeSanchez",
            "email": "pepe@pepe.es",
            "password": "aaaaaa"
        },
        {
            "firstName": "lolo",
            "lastName": "Garcia",
            "username": "LoloGarcia",
            "email": "lolo@lolo.es",
            "password": "aaaaaa"
        },
        {
            "firstName": "aaaaaa",
            "lastName": "aaaaaa",
            "username": "aaaaaa",
            "email": "aaaaaa",
            "password": "aaaaaa"
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

    async add(user: User): Promise<void> {
        this.users.push(user);
    }
}