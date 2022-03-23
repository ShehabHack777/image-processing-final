import supertest from "supertest";

import server from '../index'


const req=supertest(server)


describe("testing /app endpoind ",()=>{

    
    it("should return success connection 200 for /app end point",async()=>{

        const res=await req.get('/app');
        expect(res.statusCode).toEqual(200);
    })
} )