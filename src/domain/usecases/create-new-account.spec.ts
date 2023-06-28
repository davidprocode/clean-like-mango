import { Account } from "./create-new-account";


describe("Create new account", ()=>{
    test("Should save account on DB",async ()=>{
        const actual = Account.save({id: "0001", email:"valid@email.com", password:"123456"})
        const expected = true
        expect(actual).toBe(expected)
    })
})