const request = require("supertest");
const app = require("./server");

describe("Test My app server", () => {

    it('should get main route', async () => {
        const res = await request(app)
            .get('/api')
        console.log(res.body);
    });

    it('should create a new demand', async() => {
        const res = await request(app)
            .post('/api')
            .send({
                description: "Funcionando"
            })
        console.log(res.body);
    })

    it('should delete a demand', async() => {
        const res = await request(app)
            .delete('/api:1')

        console.log(res.body);
    })

})