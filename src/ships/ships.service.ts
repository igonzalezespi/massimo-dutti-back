import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ShipsService {

    async find(page): Promise<any> {
        const response = await axios.get(`https://swapi.dev/api/starships/?page=${page || 1}`);
        for (const ship of response.data.results) {
            ship.id = Number(ship.url.match(/http\:\/\/swapi\.dev\/api\/starships\/(\d+)/)[1]);
        }
        return response.data;
    }
}