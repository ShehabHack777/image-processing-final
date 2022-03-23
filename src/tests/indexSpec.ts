import supertest from 'supertest'
import server from '../index'


// const request = supertest(server)

// describe('Test endpoint response', () => {
//   it('test hello world endpoint', async () => {
//     const response = await request.get('/')
//     expect(response.status).toBe(200)
//   })
// })
const req=supertest(server)

describe('testing root end point response',()=>{

it("should return success connection 200 for root end point",async ()=>{

    const res= await req.get('/');

    expect(res.statusCode).toEqual(200);
})

})



